import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customers/customer.service';
import { Observable } from 'rxjs';
import { Customer } from '../customers/customer.model';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public customerOfTheDay$: Observable<string>;

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.customerOfTheDay$ = this.customerService.getCustomerOfTheDay().pipe(
      filter((customer) => !!customer),
      map(
        (customer: Customer) => customer.first_name + ' ' + customer.last_name
      )
    );
  }
}
