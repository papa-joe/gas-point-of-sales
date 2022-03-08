import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RopeService } from '../rope.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  name: any;
  phone: any;
  email: any;
  adr: any;
  info: any;
  sync_i:any;
  bres: string;
  gres: string;
  ores: string;

  constructor(
    private router: Router,
    public network: RopeService
  ) { }

  ngOnInit() {
    this.get_info();
  }

  get_info(){
    this.network.get_info().subscribe((res:any) => {
      // console.log("SUCCESS ===",res);
      // console.log(res);
      let info = res[0];
      this.name = info.name;
      this.phone = info.phone;
      this.email = info.email;
      this.adr = info.address;
    },(error: any) => {
      this.bres = "Something went wrong, please try again";
      // console.log("ERROR ===",error);
    });
  }

  edit_info(n, p, e, a){
    this.bres='';
    this.gres = '';
    if(!n){
      this.bres = "All fields are required";
    }else{
      let data = {
        n: n,
        p: p,
        e: e,
        a: a
      }
      this.network.edit_info(data).subscribe((res:any) => {
        console.log("SUCCESS ===",res);
        if(res == "bad"){
          this.bres = "Something went wrong, please try again";
        }else{
          this.gres = 'success';
        }
      },(error: any) => {
        console.log("ERROR ===",error);
      });
    }
  }

}
