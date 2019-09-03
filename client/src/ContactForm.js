import React, { Component } from 'react';
import './index.css';
import './App.css';

class ContactForm extends Component {

    constructor(props) {
        super(props);
        this.state = { username:'' };
      }
      SubmitHandler = (event) => {
        event.preventDefault();
        alert(" ดำเนินการสำเร็จ เราได้รับการติดต่อจากคุณแล้ว เราจะติดต่อกลับให้เร็วที่สุด :)");
      }

    render(){
        return(
            <div className="form-price bg-yolo text-white">
                        <b>กรุณากรอกข้อมูลเพื่อให้เจ้าหน้าที่ติดต่อกลับและให้คำปรึกษาเพิ่มเติม</b>
                        <br/>
                         <div className="row">
                        <input className="col-contact" type="text" id="phoneNumber" required="required" placeholder="เบอร์ติดต่อ"></input>
                        <select className="col-contact" id="contact" required="required" placeholder="ช่วงเวลาที่สะดวกให้ติดต่อกลับ">
                        <option value="" selected="selected">ช่วงเวลาที่สะดวกให้ติดต่อกลับ</option>
                        <option value="08:00 - 10:00">08:00 - 10:00</option>
                        <option value="10:00 - 12:00">10:00 - 12:00</option>
                        <option value="12:00 - 14:00">12:00 - 14:00</option>
                        <option value="14:00 - 16:00">14:00 - 16:00</option>
                        <option value="16:00 - 18:00">16:00 - 18:00</option>
                        <option value="18:00 - 20:00">18:00 - 20:00</option>
                        </select>        

                    <button className="btn btn-primary" onClick = {this.SubmitHandler}>ส่งข้อมูล</button>
                    </div>
                    </div>
            
        );
    }
}

export default ContactForm;