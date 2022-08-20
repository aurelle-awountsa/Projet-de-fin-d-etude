import {Component, OnInit} from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {DialogService} from "primeng/dynamicdialog";
import {ViewBookingComponent} from "@app/admin/components/calendar/view-booking/view-booking.component";
import {EToastSeverities, ToastService} from "@app/core/services/toast.service";
import {AuthService} from "@app/core/services/auth.service";
import {Router} from "@angular/router";
import {BookingService} from "@app/core/services/booking.service";
import {ConfirmationDialogComponent} from "@app/shared/components/confirmation-dialog/confirmation-dialog.component";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  events: any[] = [];

  options: any;

  minDate = new Date();

  startDate: Date;
  startTime: Date;
  endDate: Date;
  endTime: Date;

  constructor(
    private authService: AuthService,
    public toastService: ToastService,
    private bookingService: BookingService,
    private router: Router,
    private readonly dialogService: DialogService) {
  }

  ngOnInit(): void {

    if (!this.authService.getAllProfiles() ||
      (JSON.parse(localStorage['user']).role !== 'admin' &&
        JSON.parse(localStorage['user']).role !== 'teacher')) {
      this.authService.logout();
      this.toastService.show(EToastSeverities.INFO, 'Redirected to login page !');
      this.router.navigate(['/login']);
    }


    this.options = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      defaultDate: new Date().toISOString(),
      header: {
        left: 'prev,next',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      }
    };

    this.getBookings();
  }

  showEvents(data: any) {
    const bookings = [];
    data
      .forEach((u, i) => {
        const title = (u.owner === 'teacher') ? `to ${u.end.split('T')[1].substring(0, 5)} (${i})` : `booked by ${u.owner}`;
        const color =
          (u.state === 'OPEN' && u.owner === 'teacher') ? 'purple'
            : (u.state === 'CANCELLED') ? '#6A5720'
            : (u.state === 'FINISHED') ? '#F02B1D'
              : ''
        bookings.push({
          id: i,
          title: title,
          start: u.start,
          end: u.end,
          color: color
        });
      });
    return bookings;
  }

  getClikedDate(fc: any): void {
    let clickedUsername = '';
    // let clickedTeacherBooking = '';
    if ((fc as HTMLElement).tagName === 'SPAN') {
      const target = fc as HTMLElement;
      clickedUsername = target?.innerHTML.split('by')[1]?.substring(1);
      // clickedTeacherBooking = target?.innerHTML.split('to')[1]?.split('(')[1]?.charAt(0);
    } else if ((fc as HTMLElement).tagName === 'DIV') {
      const target = fc as HTMLElement;
      const target1 = target.innerHTML as unknown as HTMLElement;
      clickedUsername = JSON.stringify(target1)?.split('by')[1]?.split('<')[0]?.substring(1);
      // clickedTeacherBooking = JSON.stringify(target1)?.split('to')[1]?.split('(')[1]?.charAt(0);
    }

    if (clickedUsername) {
      this.openViewBookingDialog(clickedUsername);
    }
  }

  getBookings() {
    this.bookingService.getAllBookings()
      .subscribe(
        (data: any) => {
          this.events = this.showEvents(data);
        },
        err => {
          console.error(err.error);
        });
  }


  openViewBookingDialog(bookingDetails): void {
    const ref = this.dialogService.open(ViewBookingComponent, {
      header: 'Booking Details',
      data: bookingDetails,
      autoZIndex: true,
    });

    ref.onClose.subscribe((formId: number) => {
      if (formId) {
      }
    });
  }

  openConfirmationDialog(booking): void {
    const ref = this.dialogService.open(ConfirmationDialogComponent, {
      header: 'Confirmation',
      data: {
        message: 'Are you sure that you want to delete this appointment?'
      },
      width: '38%'
    });
    ref.onClose.subscribe((confirm: boolean) => {
      if (confirm) {
        console.log("deleted")
        console.log(booking)
      }
    });
  }

  onAddTeacherBooking() {
    console.log(this.startDate)
    console.log(this.startTime)
    console.log(this.endDate)
    console.log(this.endTime)
  }

  checkDates() {
    return !(this.startTime && this.startTime && this.endDate && this.endTime)
  }
}
