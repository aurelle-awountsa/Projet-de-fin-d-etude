export default function makeDeleteQuestion ({ removeQuestion }) {
    return async function deleteQuestion (httpRequest) {

        try {
            const deleted = await removeQuestion({ id: httpRequest.params.questionId });
            console.log(deleted);
            if(!deleted){
                return {
                    statusCode : 404,
                    body: {message: "No valid entry found for provided ID"}
                }
            }
            return {
                statusCode : 200,
                body: {
                    message: "Question deleted successfully !",
                    deletedQuestion : deleted.question
                }
            }
        } catch (e) {
            // TODO: Error logging
            console.log(e);
            return {
                statusCode: 400,
                body: {
                    error: e.message
                }
            }
        }
    }
}
