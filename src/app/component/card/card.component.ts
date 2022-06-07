import { Component, OnInit } from '@angular/core';
import { DescripcioEquipo } from 'src/app/modelo/descripcion-equipo';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  
  public info : DescripcioEquipo[];

  constructor() {
    this.info = [
      {
        nombre: "jorge saul",
        avatar:"background-image: url('https://th.bing.com/th/id/OIP.Ytap_1iXKxQgc-P_5knvywHaE9?pid=ImgDet&rs=1');background-size: cover",
        imagen:'https://th.bing.com/th/id/OIP.Smv-G5qrq2wgJf8ojaFFGAHaD4?pid=ImgDet&rs=1',
        tipo:'Cloud computing'
      },
      {
        nombre:'matias sepulveda',
        avatar:"background-image: url('https://th.bing.com/th/id/OIP.Ytap_1iXKxQgc-P_5knvywHaE9?pid=ImgDet&rs=1');background-size: cover",
        imagen:'https://th.bing.com/th/id/R.debf08888c8949085cd57abb2b04bdb1?rik=kupoBl4H7oQ7NQ&riu=http%3a%2f%2fwww.bruceduffie.com%2flucapart1.jpg&ehk=Evgwx23HWE0WQ60vFXPhJJUGGda%2f%2bD4gZVsEPisc8zU%3d&risl=&pid=ImgRaw&r=0',
        tipo:'Seguridad aumentada'
      },
      {
        nombre:'santino tapia',
        avatar:"background-image: url('https://th.bing.com/th/id/OIP.Ytap_1iXKxQgc-P_5knvywHaE9?pid=ImgDet&rs=1');background-size: cover",
        imagen:'https://th.bing.com/th/id/R.b074544a4174536a3a35b2041e101f9f?rik=arOQha9U1Mc%2fCg&riu=http%3a%2f%2fwww.okchicas.com%2fwp-content%2fuploads%2f2016%2f04%2fActores-maduros-sexis-14.jpg&ehk=2tK0pWNrY4j1%2fzt6G3%2bkVbHo49ydolPiprVlWP7cbCk%3d&risl=&pid=ImgRaw&r=0',
        tipo:'Realidad virtual y aumentada'
      },
      {
        nombre:'Mateo julian',
        avatar:"background-image: url('https://th.bing.com/th/id/OIP.Ytap_1iXKxQgc-P_5knvywHaE9?pid=ImgDet&rs=1');background-size: cover",
        imagen:'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1dXT4b.img?h=315&w=600&m=6&q=60&o=t&l=f&f=jpg&x=577&y=244',
        tipo:'Sistemas operativos / Embebidos'
      },
      {
        nombre:'Walter hidalgo',
        avatar:"background-image: url('https://th.bing.com/th/id/OIP.Ytap_1iXKxQgc-P_5knvywHaE9?pid=ImgDet&rs=1');background-size: cover",
        imagen:'https://th.bing.com/th/id/R.570e2c2c313c02a57ec2eeab19625b17?rik=ViY3xHoDiaDWzg&pid=ImgRaw&r=0',
        tipo:'Desarrollo de aplicaciones de escritorio'
      },
      {
        nombre:'Juan massi',
        avatar:"background-image: url('https://th.bing.com/th/id/OIP.Ytap_1iXKxQgc-P_5knvywHaE9?pid=ImgDet&rs=1');background-size: cover",
        imagen:'https://th.bing.com/th/id/OIP.8WzsTy1t1F5aQIXjFwiL0AHaEK?pid=ImgDet&rs=1',
        tipo:'Realidad virtual y aumentada'
      },
      {
        nombre:'Alejandro Arriagada',
        avatar:"background-image: url('https://th.bing.com/th/id/OIP.Ytap_1iXKxQgc-P_5knvywHaE9?pid=ImgDet&rs=1');background-size: cover",
        imagen:'https://cazamariposasblopezsa.webnode.es/_files/200000031-58934598d2/C37DD41E5831CF9AF721B87EDE03E.jpg',
        tipo:'Cloud computing'
      },
      {
        nombre:'Ariel fernandez',
        avatar:"background-image: url('https://th.bing.com/th/id/OIP.Ytap_1iXKxQgc-P_5knvywHaE9?pid=ImgDet&rs=1');background-size: cover",
        imagen:'https://smoda.elpais.com/wp-content/uploads/2019/04/GettyImages-173720550.jpg',
        tipo:'Machine learning'
      },
      {
        nombre:'Roberto auriel',
        avatar:"background-image: url('https://th.bing.com/th/id/OIP.Ytap_1iXKxQgc-P_5knvywHaE9?pid=ImgDet&rs=1');background-size: cover",
        imagen:'https://smoda.elpais.com/wp-content/uploads/2019/04/GettyImages-803015182.jpg',
        tipo:'Seguridad informática'
      },
      {
        nombre:'Esteban vega',
        avatar:"background-image: url('https://th.bing.com/th/id/OIP.Ytap_1iXKxQgc-P_5knvywHaE9?pid=ImgDet&rs=1');background-size: cover",
        imagen:'https://th.bing.com/th/id/R.200fc7a597f7a114c07a3549a4956a18?rik=60dJ0j1VrGwAIg&riu=http%3a%2f%2fmisimagenesde.com%2fwp-content%2fuploads%2f2017%2f05%2ffotos-de-famosos-5.jpg&ehk=qeelS7jElwkiudPC9xMtEE5OZNBHFZtPx86DJybDq4Q%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
        tipo:'Sistemas operativos / Embebidos'
      },
      {
        nombre:'Diego torres',
        avatar:"background-image: url('https://th.bing.com/th/id/OIP.Ytap_1iXKxQgc-P_5knvywHaE9?pid=ImgDet&rs=1');background-size: cover",
        imagen:'https://th.bing.com/th/id/OIP.TWYynl71PLHqloIKF9hICwHaE8?pid=ImgDet&rs=1',
        tipo:'Desarrollo de aplicaciones de escritorio'
      },
      {
        nombre:'Joaquin salinas',
        avatar:"background-image: url('https://th.bing.com/th/id/OIP.Ytap_1iXKxQgc-P_5knvywHaE9?pid=ImgDet&rs=1');background-size: cover",
        imagen:'https://www.elsiglodetorreon.com.mx/m/i/2015/11/769517.jpeg?fb=1',
        tipo:'Realidad virtual y aumentada'
      }
    ]

  }

  ngOnInit(): void {
  }

}