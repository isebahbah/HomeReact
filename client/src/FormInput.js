import React, { Component } from 'react';
import './App.css';
import ContactForm from './ContactForm';


class FormInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      txt: 'ประเมินราคาตรวจบ้านและคอนโดเบื้องต้นของคุณ',
      price: '' ,
      show: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(e){

    var a = document.getElementById("home");
    var homeIndex = a.selectedIndex;

    var b = document.getElementById("area");
    var areaIndex = b.selectedIndex;

    var c = document.getElementById("province");
    var provinceIndex = c.selectedIndex;

    var d = document.getElementById("check");
    var checkIndex = d.selectedIndex;

    var prices;

if(homeIndex === 1){
  if(provinceIndex === 1){
    if(checkIndex === 1){
      if(areaIndex === 1 || areaIndex === 2 || areaIndex === 3 || areaIndex === 4 ){
          prices = Math.floor((Math.random() * 5000) + 3000)+" BATH" ;
      }else if(areaIndex === 5 || areaIndex === 6 || areaIndex === 7 || areaIndex === 8 ){
        prices = Math.floor((Math.random() * 7000) + 5000) +" BATH";
      }

    }else if(checkIndex === 2){
      if(areaIndex === 1 || areaIndex === 2 || areaIndex === 3 || areaIndex === 4 ){
        prices = Math.floor((Math.random() * 6000) + 4000)+" BATH";
    }else if(areaIndex === 5 || areaIndex === 6 || areaIndex === 7 || areaIndex === 8 ){
      prices = Math.floor((Math.random() * 8000) + 7000)+" BATH";
    }

    }
   
  }else if (provinceIndex === 2){
    if(checkIndex === 1){
      if(areaIndex === 1 || areaIndex === 2 || areaIndex === 3 || areaIndex === 4 ){
        prices = Math.floor((Math.random() * 2000) + 1000)+" BATH";
    }else if(areaIndex === 5 || areaIndex === 6 || areaIndex === 7 || areaIndex === 8 ){
      prices = Math.floor((Math.random() * 5000) + 2000)+" BATH";
    }
    }else if(checkIndex === 2){
      if(areaIndex === 1 || areaIndex === 2 || areaIndex === 3 || areaIndex === 4 ){
        prices = Math.floor((Math.random() * 6000) + 5000)+" BATH";
    }else if(areaIndex === 5 || areaIndex === 6 || areaIndex === 7 || areaIndex === 8 ){
      prices = Math.floor((Math.random() * 8000) + 6000)+" BATH";
    }
    }
   }

}else if(homeIndex === 2){
  if(provinceIndex === 1){
    if(checkIndex === 1){
      if(areaIndex === 1 || areaIndex === 2 || areaIndex === 3 || areaIndex === 4 ){
          prices = Math.floor((Math.random() * 6000) + 7000)+" BATH";
      }else if(areaIndex === 5 || areaIndex === 6 || areaIndex === 7 || areaIndex === 8 ){
        prices = Math.floor((Math.random() * 9000) + 8000)+" BATH";
      }

    }else if(checkIndex === 2){
      if(areaIndex === 1 || areaIndex === 2 || areaIndex === 3 || areaIndex === 4 ){
        prices = Math.floor((Math.random() * 7000) + 8000)+" BATH";
    }else if(areaIndex === 5 || areaIndex === 6 || areaIndex === 7 || areaIndex === 8 ){
      prices = Math.floor((Math.random() * 9000) + 13000)+" BATH";
    }

    }
   
  }else if (provinceIndex === 2){
    if(checkIndex === 1){
      if(areaIndex === 1 || areaIndex === 2 || areaIndex === 3 || areaIndex === 4 ){
        prices = Math.floor((Math.random() * 2000) + 1000)+" BATH";
    }else if(areaIndex === 5 || areaIndex === 6 || areaIndex === 7 || areaIndex === 8 ){
      prices = Math.floor((Math.random() * 5000) + 2000)+" BATH";
    }
    }else if(checkIndex === 2){
      if(areaIndex === 1 || areaIndex === 2 || areaIndex === 3 || areaIndex === 4 ){
        prices = Math.floor((Math.random() * 6000) + 5000)+" BATH";
    }else if(areaIndex === 5 || areaIndex === 6 || areaIndex === 7 || areaIndex === 8 ){
      prices = Math.floor((Math.random() * 8000) + 6000)+" BATH";
    }
    }
   }


}else if(homeIndex === 3){
  if(provinceIndex === 1){
    if(checkIndex === 1){
      if(areaIndex === 1 || areaIndex === 2 || areaIndex === 3 || areaIndex === 4 ){
          prices = Math.floor((Math.random() * 5000) + 3000)+" BATH";
      }else if(areaIndex === 5 || areaIndex === 6 || areaIndex === 7 || areaIndex === 8 ){
        prices = Math.floor((Math.random() * 7000) + 5000)+" BATH";
      }

    }else if(checkIndex === 2){
      if(areaIndex === 1 || areaIndex === 2 || areaIndex === 3 || areaIndex === 4 ){
        prices = Math.floor((Math.random() * 6000) + 4000)+" BATH";
    }else if(areaIndex === 5 || areaIndex === 6 || areaIndex === 7 || areaIndex === 8 ){
      prices = Math.floor((Math.random() * 8000) + 7000)+" BATH";
    }

    }
   
  }else if (provinceIndex === 2){
    if(checkIndex === 1){
      if(areaIndex === 1 || areaIndex === 2 || areaIndex === 3 || areaIndex === 4 ){
        prices = Math.floor((Math.random() * 2000) + 1000)+" BATH";
    }else if(areaIndex === 5 || areaIndex === 6 || areaIndex === 7 || areaIndex === 8 ){
      prices = Math.floor((Math.random() * 5000) + 2000)+" BATH";
    }
    }else if(checkIndex === 2){
      if(areaIndex === 1 || areaIndex === 2 || areaIndex === 3 || areaIndex === 4 ){
        prices = Math.floor((Math.random() * 6000) + 5000)+" BATH";
    }else if(areaIndex === 5 || areaIndex === 6 || areaIndex === 7 || areaIndex === 8 ){
      prices = Math.floor((Math.random() * 8000) + 6000)+" BATH";
    }
    }
   }

}else if(homeIndex ===4){
  if(provinceIndex === 1){
    if(checkIndex === 1){
      if(areaIndex === 1 || areaIndex === 2 || areaIndex === 3 || areaIndex === 4 ){
          prices = Math.floor((Math.random() * 5000) + 3000)+" BATH";
      }else if(areaIndex === 5 || areaIndex === 6 || areaIndex === 7 || areaIndex === 8 ){
        prices = Math.floor((Math.random() * 7000) + 5000)+" BATH";
      }

    }else if(checkIndex === 2){
      if(areaIndex === 1 || areaIndex === 2 || areaIndex === 3 || areaIndex === 4 ){
        prices = Math.floor((Math.random() * 6000) + 4000)+" BATH";
    }else if(areaIndex === 5 || areaIndex === 6 || areaIndex === 7 || areaIndex === 8 ){
      prices = Math.floor((Math.random() * 8000) + 7000)+" BATH";
    }

    }
   
  }else if (provinceIndex === 2){
    if(checkIndex === 1){
      if(areaIndex === 1 || areaIndex === 2 || areaIndex === 3 || areaIndex === 4 ){
        prices = Math.floor((Math.random() * 2000) + 1000)+" BATH";
    }else if(areaIndex === 5 || areaIndex === 6 || areaIndex === 7 || areaIndex === 8 ){
      prices = Math.floor((Math.random() * 5000) + 2000)+" BATH";
    }
    }else if(checkIndex === 2){
      if(areaIndex === 1 || areaIndex === 2 || areaIndex === 3 || areaIndex === 4 ){
        prices = Math.floor((Math.random() * 6000) + 5000)+" BATH";
    }else if(areaIndex === 5 || areaIndex === 6 || areaIndex === 7 || areaIndex === 8 ){
      prices = Math.floor((Math.random() * 8000) + 6000)+" BATH";
    }
    }
   }
}
     
     if(homeIndex !== 0 && areaIndex !== 0 && provinceIndex !== 0 && checkIndex !== 0){
        this.setState({show: 'show' , 
        txt: 'ราคาตรวจบ้านของคุณ คือ ',
        price: prices 
      }); }
   }
  
   
   render() {
    return (
      
      

        <div className="container-fluid bg-yolo text-white">
        <div id="form-price">
        <form onChange={this.handleChange}>
        
        <select className="col" id="home" col-sm-3 required="required">
        <option className="col" value="">ประเภทสถานที่</option>
        <option value="onefloor">บ้านชั้นเดียว</option>
        <option value="twofloor">บ้านสองชั้น</option>
        <option value="townhome">ทาวน์โฮม</option>
        <option value="condo">คอนโด</option>
        </select>

            <select className="col" id="area" required="required"  >
            <option value="">พื้นที่ใช้สอย</option>
            <option value="40">&lt;= 40 ตร.เมตร</option>
            <option value="80">&lt;= 80 ตร.เมตร</option>
            <option value="120">&lt;= 120 ตร.เมตร</option>
            <option value="200">&lt;= 200 ตร.เมตร</option>
            <option value="360">&lt;= 360 ตร.เมตร</option>
            <option value="500">&lt;= 500 ตร.เมตร</option>
            <option value="750">&lt;= 750 ตร.เมตร</option>
            <option value="1000">&lt;= 1000 ตร.เมตร</option></select>

                <select className="col"  id="province" required="required"  >
                <option value="">จังหวัด</option>
                <option value="bkk">กรุงเทพ</option>
                <option value="outside">ต่างจังหวัด</option></select>

                    <select className="col"  id="check" required="required"  >
                    <option value="">รอบการตรวจ</option>
                    <option value="onecheck">ตรวจครั้งเดียว</option>
                    <option value="recheck">ตรวจครั้งแรกและตรวจซ้ำหลังแก้ไข</option>
                    </select>
             
                </form>
             </div>
            <br/>
              <h3>{this.state.txt}</h3><br/>   <h3>{this.state.price} </h3>
            
                  <hr  className="my-4"></hr>
                       {this.state.show && <ContactForm/>}
      </div>
      
    );
  }
}
export default FormInput;