import { Component, OnInit } from '@angular/core';
import { SHeaderFooterUsuarioService } from 'src/app/servicios/s-header-footer-usuario.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  header={
    TelefonoHeader:'',
    UrlLogo:''
  };

  constructor(private GetHeader: SHeaderFooterUsuarioService) {
    
    this.GetHeader.GetHeader().subscribe(Header => {
      this.header = {TelefonoHeader:Header.TelefonoHeader,UrlLogo:Header.UrlLogo};

      console.log(this.header);
    }
    )


   }

  ngOnInit() {
  }

}
