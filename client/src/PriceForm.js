import React, { Component } from 'react';



class PriceForm extends Component {
 /* constructor(props){
        super(props)
       this.state = { store : ''}
    } */

    componentDidMount(){}
         
    
            
        

    render() {
        return (
        <div className="bg-yolo">

       <form  className="form-option-matching" class="row" method="get">
      <div class="-select-container  col-sm-3">
        <select name="option_area" data-type="area" class="form-control" data-empty="พื้นที่ใช้สอย">
            <option value="">พื้นที่ใช้สอย</option><option value="40">&lt;= 40 ตร.เมตร</option>
            <option value="80">&lt;= 80 ตร.เมตร</option><option value="120">&lt;= 120 ตร.เมตร</option>
            <option value="200">&lt;= 200 ตร.เมตร</option><option value="360">&lt;= 360 ตร.เมตร</option>
            <option value="500">&lt;= 500 ตร.เมตร</option><option value="750">&lt;= 750 ตร.เมตร</option>
            <option value="1000">&lt;= 1000 ตร.เมตร</option></select>
    </div>
    <div class="-select-container  col-sm-3">
            <select name="option_province" data-type="province" class="form-control" data-empty="จังหวัด">
                <option value="">จังหวัด</option><option value="bkk">กรุงเทพ</option>
                <option value="outside">ต่างจังหวัด</option></select>
        </div>
        <div class="-select-container  col-sm-3">
                <select name="option_amount" data-type="amount" class="form-control" data-empty="รอบการตรวจ">
                    <option value="">รอบการตรวจ</option>
                    <option value="once">ตรวจครั้งเดียว</option>
                    <option value="recheck">ตรวจครั้งแรกและตรวจซ้ำหลังแก้ไข</option></select>
            </div>
          </form> 
               <button id="hide" onClick="showContact()">click</button>
               <button id="show" onClick="showContact()">show</button>

              <div className="container-fluid" id="flip" bg-info>
              <h1>lolipop</h1>
          </div>
          </div>

         
        );
    }
}
export default PriceForm;