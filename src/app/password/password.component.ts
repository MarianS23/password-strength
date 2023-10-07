import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {
  public password!: string;
  public section1 = '';
  public section2 = '';
  public section3 = '';

  public vision:boolean = false;
  
  switchVision(){
    this.vision = !this.vision;
  }


  ngOnInit(): void {

  }

  checkPassword() {
    if (this.password && this.password.length < 8) {
      this.section1 = 'red';
      this.section2 = 'red';
      this.section3 = 'red';
    }else if(this.password.length>=8){ 
      switch (this.passwordStrength()) {
        case 1:
          this.section1 = 'red';
          this.section2 = '';
          this.section3 = '';
          break
        case 2:
          this.section1 = 'yellow';
          this.section2 = 'yellow';
          this.section3 = '';
          break
        case 3:
          this.section1 = 'green';
          this.section2 = 'green';
          this.section3 = 'green';
          break
      }
    } else {
      this.section1 = '';
      this.section2 = '';
      this.section3 = '';
    }
  }

  passwordStrength() {
    let result = 0;
    const number = /[0-9]/g;
    const letter = /[A-Za-z]/g;
    const symbol = /[^\w\s]/g;
    number.test(this.password) ? result++ : result;
    letter.test(this.password) ? result++ : result;
    symbol.test(this.password) ? result++ : result;
    return result

  }

  
}
