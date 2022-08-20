import path from "path";
import consola from "consola";
import startDatabase from "./config/database";
import {authenticateUser} from './security';
import {bookingRoutes} from "./routes/booking";

export default function express_server(express) {

    this.app = express();

    /** @databaseInitiation
     * Function to initiate the database connection
     * @returns {this} reference to the function it selt
     */
    this.initDatabase = () => {
        startDatabase();
        return this;
    };

    /** @middlewareHandler
     * Function to add middleware
     * @returns {this} reference to the express app
     * @param middleware
     */
    this.addMiddleware = middleware => {
        this.app.use(middleware)
        return this;
    }


    /** @helmetSecurityHandler
     * Function to add security headers with Helmet
     * @returns {this} reference to the express app
     * @param helmet
     */
    this.helmetSecurity = (helmet) => {
        this.app.use(helmet());
        this.app.use(helmet.hsts({
            maxAge: 5184000,
            includeSubDomains: true
        }));

        this.app.use(helmet.featurePolicy({
            features: {
                fullscreen: ["'self'"],
                payment: ["'none'"],
                syncXhr: ["'none'"],
                camera: ["'none'"],
                microphone: ["'none'"],
            }
        }));

        this.app.use(helmet.permittedCrossDomainPolicies());
        this.app.use(helmet.referrerPolicy({policy: 'strict-origin-when-cross-origin'}));
        return this;
    }

    /** @passportConfiguration
     * Function to configure the passport libary
     * @returns {this} reference to the express app
     * @param passport
     */
    this.passportConfig = passport => {
        authenticateUser(passport);
        this.app.use(passport.initialize())
        this.app.use(passport.session())
        return this;
    }

    /** @rountingHandler
     * Function to route requests coming in
     * @returns {this} reference to the express app
     * @param route
     */
    this.addRouting = route => {

        /* homepage route */
        this.app.get('/', (req, res) => {
            return res.sendFile(path
                .join(__dirname + '/public', 'dist', 'index.html'));
        });

        /* API routes */
        this.app.use('/server/api/', route.usersRoutes)
        this.app.use('/server/api/', route.questionsRoutes)
        this.app.use('/server/api/', route.reviewsRoutes)
        this.app.use('/server/api/', route.bookingRoutes)
        this.app.use('/server/api/', route.logsRoutes)

        /* API documentation route */
        this.app.use('/server/api/api-documentation', (req, res) => {
            return res.sendFile(path.resolve('./docs/index.html'));
        });

        /* ANY route */
        this.app.get('*', (req, res) => {
            return res.sendFile(path
                .join(__dirname + '/public', 'dist', 'index.html'));
        });
        return this;
    }

    /** @staticFilesHandler
     * Function to serve static files
     * @returns {this} reference to the express app
     */
    this.serveStaticFiles = () => {
        this.app.use(express.static(path
            .join(__dirname, '/public', 'dist')));
        return this;
    }

    /** @expressPortHandler
     * Function to handle which port the express server listens on
     * @returns {this} reference to the express app
     * @param port
     */
    this.listenOn = port => {
        this.app.listen(port, () =>
            consola.info(
                {
                    message: `Server started on port ${port}`,
                    badge: true
                }));
        return this;
    }

    /** @errorHandler
     * Function to handle erros of type 500
     * @returns {this} return an error message with an http code
     */
    this.errorHandler = () => {
        this.app.use((req, res) => {
            const error = new Error("Route Not found !");
            res.status(500).json({
                message: error.message
            });
        });
        return this;
    }


    /** @startServerHandler
     * Function to start the express server
     * @returns {this} reference to the express app
     */
    this.run = () => {
        return this.app;
    }

}

