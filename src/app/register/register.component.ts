import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  model: any = {}

  @Output()
  cancelRegister = new EventEmitter;

  ngOnInit(): void {
  }

  register() {
    this.accountService.register(this.model).subscribe(
      response => {
        console.log(response);
        this.model = {};
      },
      error => console.log(error)
    );
    
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

}
