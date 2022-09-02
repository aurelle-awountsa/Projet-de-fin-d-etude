import {Component, OnInit} from '@angular/core';
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import {ConfirmationDialogComponent} from "@app/shared/components/confirmation-dialog/confirmation-dialog.component";
import {DialogService} from "primeng/dynamicdialog";
import {EToastSeverities, ToastService} from "@app/core/services/toast.service";
import {BookingService} from "@app/core/services/booking.service";
import {Router} from "@angular/router";
import {filter, switchMap, tap} from "rxjs/operators";

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  events: any[] = [];

  options: any;

  constructor(private readonly dialogService: DialogService,
              private router: Router,
              public toastService: ToastService,
              private bookingService: BookingService) {
  }

  ngOnInit(): void {

    if (!Object.keys(localStorage).includes('id_token')) {
      this.toastService.show(EToastSeverities.INFO, 'Redirected to login page !');
      this.router.navigate(['/login'])
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

  getClikedDate(fc: any): void {
    let clickedTeacherBooking = '';
    if ((fc as HTMLElement).tagName === 'SPAN') {
      const target = fc as HTMLElement;
      clickedTeacherBooking = target?.innerHTML.split('to')[1]?.split('(')[1]?.charAt(0);
    } else if ((fc as HTMLElement).tagName === 'DIV') {
      const target = fc as HTMLElement;
      const target1 = target.innerHTML as unknown as HTMLElement;
      clickedTeacherBooking = JSON.stringify(target1)?.split('to')[1]?.split('(')[1]?.charAt(0);
    }

    if (clickedTeacherBooking) {
      this.openConfirmationDialog(clickedTeacherBooking);
    }
  }

  getBookings() {
    this.bookingService.getTeacherBookings()
      .subscribe(
        (data: any) => {
          this.events = this.showEvents(data);
        },
        err => {
          console.error(err.error);
        });
  }

  openConfirmationDialog(bookingIndex): void {
    const booking = this.events.find(u => u.id == bookingIndex);
    const bookingTosave = {
      start: booking.start,
      end: booking.end,
      bookingIndex: bookingIndex
    };
    console.log(bookingTosave)
    const ref = this.dialogService.open(ConfirmationDialogComponent, {
      header: 'Confirmation',
      data: {
        message: `book the teacher from ${booking.start.split('T')[1].substring(0, 5)} to  ${booking.end.split('T')[1].substring(0, 5)}`
      }
    });

    ref.onClose
      .pipe(
        filter((confirm: boolean) => confirm),
        switchMap(() => this.bookingService.addUserBooking(bookingTosave)),
        switchMap(() => this.bookingService.getTeacherBookings()))
      .subscribe(
        (data: any) => {
          this.events = this.showEvents(data);
          this.toastService.show(EToastSeverities.SUCCESS, 'Successfully booked !');
        },
        error => {
          if (error.error.message) {
            this.toastService.show(EToastSeverities.INFO, `${error.error.message}`);
          } else {
            this.toastService.show(EToastSeverities.ERROR, 'Something went wrong !');
          }
        })

  }

  showEvents(data: any) {
    const bookings = [];
    data
      .forEach((u, i) => {
        const title = (u.state === 'FINISHED') ?
          `to ${u.end.split('T')[1].substring(0, 5)}`
          : `to ${u.end.split('T')[1].substring(0, 5)} (${i})`;
        const color = (u.state === 'CANCELLED') ? '#6A5720' : (u.state === 'FINISHED') ? '#F02B1D' : ''
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
}

/*
    ref.onClose.subscribe((confirm: boolean) => {
      if (confirm) {
        this.events = this.events.filter(u => u.id != bookingIndex);
        this.toastService.show(EToastSeverities.SUCCESS, 'successfully booked !');
      }
    });

 */
