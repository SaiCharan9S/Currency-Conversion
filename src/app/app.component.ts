import { Component, OnInit } from '@angular/core';
import { CurrencyapidataService } from './currencyapidata.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrencyConversion } from './CurrencyConversion';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'currencyconversion';
  currjson: any = [];
  convertval:number=0.0; 

  public quantity:number=0 ;
  myData: any;
  ngOnInit(){
    this.http.get('https://trial.mobiscroll.com/content/countries.json').subscribe((resp: any) => {
            const countries = [];
            for (let i = 0; i < resp.length; ++i) {
                const country = resp[i];
                countries.push({ text: country.text, value: country.value });
            }
            this.myData = countries;
            console.log(this.myData,'ppppp')
        });

  }

  from = 'INR';
  to = 'USD';
  result: number =1;

  changebase(a:string){
    this.from = a;
  }

  tocountry(b:string){
this.to = b;


}

constructor(private currency: CurrencyapidataService, private http: HttpClient){}

convert(){
  console.log(this.quantity);
//  console.log(this.base)
//  console.log(this.cont2)
this.currency.getcurrencydata(this.quantity,this.from,this.to).subscribe(data => {
console.log(data)
let currencyConversion: CurrencyConversion = new CurrencyConversion(data);
this.result=currencyConversion.totalCalculatedAmount;
  this.currjson = JSON.stringify(data);
  //console.log(this.currjson);
  this.currjson = JSON.parse(this.currjson)
    console.log(this.currjson);

    if (this.to == 'USD'){
    this.result = this.currjson.rates.USD * this.quantity
    }

    if (this.to == 'INR'){
      this.result = this.currjson.rates.INR * this.quantity
      }

      if (this.to == 'EUR'){
        this.result = this.currjson.rates.EUR * this.quantity
        }
        if (this.to == 'AUD'){
          this.result = this.currjson.rates.AUD * this.quantity
          }
          if (this.to == 'GBP'){
            this.result = this.currjson.rates.GBP * this.quantity
            }
            if (this.to == 'CAD'){
              this.result = this.currjson.rates.CAD * this.quantity
              }
              if (this.to == 'JPY'){
                this.result = this.currjson.rates.JPY * this.quantity
                }
                if (this.to == 'NZD'){
                  this.result = this.currjson.rates.NZD * this.quantity
                  }
                  if (this.to == 'CHF'){
                    this.result = this.currjson.rates.CHF * this.quantity
                    }
                    if (this.to == 'ZAR'){
                      this.result = this.currjson.rates.ZAR * this.quantity
                      }
                      if (this.to == 'RUB'){
                        this.result = this.currjson.rates.RUB * this.quantity
                        }

                        if (this.to == 'BGN'){
                          this.result = this.currjson.rates.BGN * this.quantity
                          }

                          if (this.to == 'SGD'){
                            this.result = this.currjson.rates.SGD * this.quantity
                            }
                            if (this.to == 'HKD'){
                              this.result = this.currjson.rates.HKD * this.quantity
                              }
                              if (this.to == 'SEK'){
                                this.result = this.currjson.rates.SEK * this.quantity
                                }
                                if (this.to == 'THB'){
                                  this.result = this.currjson.rates.THB * this.quantity
                                  }
                                  if (this.to == 'HUF'){
                                    this.result = this.currjson.rates.HUF * this.quantity
                                    }
                                    if (this.to == 'CNY'){
                                      this.result = this.currjson.rates.CNY * this.quantity
                                      }
                                      if (this.to == 'NOK'){
                                        this.result = this.currjson.rates.NOK * this.quantity
                                        }
                                        if (this.to == 'MXN'){
                                          this.result = this.currjson.rates.MXN * this.quantity
                                          }
                                          if (this.to == 'DKK'){
                                            this.result = this.currjson.rates.DKK * this.quantity
                                            }
                                            if (this.to == 'MYR'){
                                              this.result = this.currjson.rates.MYR * this.quantity
                                              }
                                                                                                                        
                                                                                                                                    
                                                                              
                                                       

})
}

}
