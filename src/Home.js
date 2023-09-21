import React from 'react'
import { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import axios from 'axios';
import 'primeicons/primeicons.css';
import { BiDollar } from 'react-icons/bi'
import { BiUser } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import chart from 'react-apexcharts'
import './chart1.css'
import { Dialog } from 'primereact/dialog';






function Home() {

  const [monthWiseCurrentYearDonation, setMonthWiseCurrentYearDonation] = useState([]);

  const [TotalDonationsVisible, setTotalDonationsVisible] = useState(true)
  const [MonthDonationsVisible, setMonthDonationsVisible] = useState(false)
  const [YearDonationsVisible, setYearDonationsVisible] = useState(false)

  const [TotalDonationsVisiblechart3, setTotalDonationsVisiblechart3] = useState(true)
  const [MonthDonationsVisiblechart3, setMonthDonationsVisiblechart3] = useState(false)
  const [YearDonationsVisiblechart3, setYearDonationsVisiblechart3] = useState(false)

  const [TotalDonationsVisiblechart5, setTotalDonationsVisiblechart5] = useState(true)
  const [MonthDonationsVisiblechart5, setMonthDonationsVisiblechart5] = useState(false)
  const [YearDonationsVisiblechart5, setYearDonationsVisiblechart5] = useState(false)

  const [TotalDonations, setTotalDonations] = useState([])
  const [MonthDonations, setMonthDonations] = useState([]);
  const [YearDonations, setYearDonations] = useState([]);

  const [TotalDoners, setTotalDoners] = useState()
   const [MonthDoners, setMonthDoners] = useState([]);
  const [YearDoners, setYearDoners] = useState([]);

  const [TotalDonersVisiblechart4, setTotalDonersVisiblechart4] = useState(true)
  const [MonthDonersVisiblechart4, setMonthDonersVisiblechart4] = useState(false)
  const [YearDonersVisiblechart4, setYearDonersVisiblechart4] = useState(false)
 
  const [TotalDonersVisiblechart5, setTotalDonersVisiblechart5] = useState(true)
  const [MonthDonersVisiblechart5, setMonthDonersVisiblechart5] = useState(false)
  const [YearDonersVisiblechart5, setYearDonersVisiblechart5] = useState(false)

  const [chart1Value, setChart1Value] = useState(false);
  const [chart1Value2, setChart1Value2] = useState();
  const [chart3Value, setChart3Value] = useState();
  const [chart4Value, setChart4Value] = useState();
  const [chart5Value, setChart5Value] = useState();
  const [chart6Value, setChart6Value] = useState();
  const [chart7Value, setChart7Value] = useState();
  const [chart8Value, setChart8Value] = useState();
  const [isVisible, setIsVisible] = useState(false);



  const TDonations = TotalDonations;
  const targetValue = 400000; // You can set your target value here

  // Calculate the percentage
  const percentage = (TDonations / targetValue) * 100;

  const TDoners = TotalDoners;
  const targetDoners = 100; // You can set your target value here

  // Calculate the percentage
  const percentageDoners = (TDoners / targetDoners) * 100;


  const monthNumberToName = (monthNumber) => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return months[monthNumber - 1]; // Subtract 1 because month numbers are 1-based
  };


  const calculateYearDonation = (currentYearDonation) => {
    const monthlyData = currentYearDonation.reduce((acc, donation) => {
      const date = new Date(donation.date);
      const yearMonth = `${date.getFullYear()}-${date.getMonth() + 1}`;
      if (!acc[yearMonth]) {
        acc[yearMonth] = 0;
      }
      acc[yearMonth] += donation.Donation;
      return acc;
    }, {});


    const convertedData = Object.entries(monthlyData).map(([key, value]) => ({
      month: key,
      value: value,
    }));


    const Data = convertedData?.map(({ month, value }) => ({
      month: monthNumberToName(parseInt(month.split('-')[1])), // Extract month number and convert to name
      value: value,
    }));

    console.log(Data);

    setMonthWiseCurrentYearDonation(Data)
    console.log("asasa", Data)
  }





  const HandleChange1 = (e) => {
    setChart4Value(e.target.value)
    if (e.target.value == '1') {
      setMonthDonationsVisible(true)
      setTotalDonationsVisible(false)
      setYearDonationsVisible(false)
    }
    else if (e.target.value == '2') {
      setYearDonationsVisible(true)
      setMonthDonationsVisible(false)
      setTotalDonationsVisible(false)
    } else {
      setTotalDonationsVisible(true)
      setMonthDonationsVisible(false)
      setYearDonationsVisible(false)
    }
  }


  const HandleChange2 = (e) => {
    setChart4Value(e.target.value)
    if (e.target.value === '1') {
      alert('Hello This Month')
    }
    else if (e.target.value === '2') {
      alert("Hello This Year")
    } else {
      alert('Today Value')
    }

  }


  const HandleChange3 = (e) => {
   
    if (e.target.value === '1') {
       setMonthDonationsVisiblechart3(true)
    setTotalDonationsVisiblechart3(false)
       setYearDonationsVisiblechart3(false)
    }
    else if (e.target.value === '2') {
      setYearDonationsVisiblechart3(true)
      setMonthDonationsVisiblechart3(false)
      setTotalDonationsVisiblechart3(false)
    } else {
      setTotalDonationsVisiblechart3(true)
      setMonthDonationsVisiblechart3(false)
      setYearDonationsVisiblechart3(false)
    }
  }


  const HandleChange4 = (e) => {
    setChart4Value(e.target.value)
    if (e.target.value === '1') {
      setMonthDonersVisiblechart4(true)
   setTotalDonersVisiblechart4(false)
      setYearDonersVisiblechart4(false)
   }
   else if (e.target.value === '2') { 
    setYearDonersVisiblechart4(true)
    setMonthDonersVisiblechart4(false)
   setTotalDonersVisiblechart4(false)
     
   } else { 
    setTotalDonersVisiblechart4(true)
    setMonthDonersVisiblechart4(false)
       setYearDonersVisiblechart4(false)
   }
  }

  const HandleChange5 = (e) => {
    setChart5Value(e.target.value)
    if (e.target.value === '1') {
      setMonthDonersVisiblechart5(true)
      setMonthDonationsVisiblechart5(true)
      setTotalDonationsVisiblechart5(false)
      setYearDonationsVisiblechart5(false)
   setTotalDonersVisiblechart5(false)
      setYearDonersVisiblechart5(false)
   }
   else if (e.target.value === '2') { 
    setYearDonersVisiblechart5(true)
    setMonthDonersVisiblechart5(false)
   setTotalDonersVisiblechart5(false)
   setMonthDonationsVisiblechart5(false)
      setTotalDonationsVisiblechart5(false)
      setYearDonationsVisiblechart5(true)
     
   } else { 
    setTotalDonersVisiblechart5(true)
    setMonthDonersVisiblechart5(false)
       setYearDonersVisiblechart5(false)
       setMonthDonationsVisiblechart5(false)
      setTotalDonationsVisiblechart5(true)
      setYearDonationsVisiblechart5(false)
   }
  }

  const HandleChange6 = (e) => {
    setChart6Value(e.target.value)
    if (e.target.value === '1') {
      alert('Hello This Month')
    }
    else if (e.target.value === '2') {
      alert("Hello This Year")
    } else {
      alert('Today Value')
    }

  }

  // ..................Get Donations,......................


  const getDonations = async () => {
    const data = await axios.get(`http://localhost:5000/api/Donation`);
    const response = data.data

    calculateYearDonation(response)
    console.log(calculateYearDonation, "Yasir")
    let totalDonation = 0;

    for (let i = 0; i < response.length; i++) {
      const donationValue = parseFloat(response[i].Donation);

      if (!isNaN(donationValue)) {
        totalDonation += donationValue;
      }
    }

    console.log("Total Donation:", totalDonation);
    // var value=totalDonation
    // var textArray = value.split('');

    // Insert a comma after the first character
    // var value=totalDonation.splice(1, 0, ',');

    // // Convert the modified array back to a string
    // var modifiedText = value.join('');

    setTotalDonations(totalDonation, "totalDonation")

    console.log(totalDonation);
  };


  // const getTime=(date)=>{
  //     var t=date?.toString()?.split("T")
  //     console.log(t)
  //      return t[0]
  //   }


  const getTime = (date) => {
    if (date) {
      var t = date.toString().split("T");
      //   console.log(t);
      return t[0];
    } else {
      return "Input date is undefined";
    }
  }



  // const getTodayDonations = async () => {

  //   const data = await axios.get(`http://localhost:5000/api/Donation`);
  //   const response = data.data

  //   const Abc = response?.map(c => ({ ...c, date: getTime(c.date) }))

  //   const filteredRecords = Abc.filter((record) => {
  //     const recordDate = new Date(record.date); // Convert the 'date' string to a Date object
  //     const today = new Date();

  //     const isSameDate =
  //       recordDate.getDate() === today.getDate() &&
  //       recordDate.getMonth() === today.getMonth() &&
  //       recordDate.getFullYear() === today.getFullYear();

  //     return isSameDate;
  //   });

  //   const Sum = filteredRecords
  //   let totalDonation = 0;
  //   for (let i = 0; i < Sum.length; i++) {
  //     const donationValue = parseFloat(Sum[i].Donation);
  //     if (!isNaN(donationValue)) {
  //       totalDonation += donationValue;
  //     }
  //   }

  //   //   console.log("Total Donation:", totalDonation);

  //   setTodayDonations(totalDonation)
  // }




  const getMonthDonations = async () => {

    const data = await axios.get(`http://localhost:5000/api/Donation`);
    const response = data.data
    console.log("***", response)

    const Abc = response?.map(c => ({ ...c, date: getTime(c.date) }))

    const filteredRecords = Abc.filter((record) => {
      const recordDate = new Date(record.date); // Convert the 'date' string to a Date object
      const today = new Date();

      const isSameDate =
        recordDate.getMonth() === today.getMonth() &&
        recordDate.getFullYear() === today.getFullYear();

      return isSameDate;
    });

    const Sum = filteredRecords
    let totalDonation = 0;

    for (let i = 0; i < Sum.length; i++) {
      const donationValue = parseFloat(Sum[i].Donation);

      if (!isNaN(donationValue)) {
        totalDonation += donationValue;
      }
    }

    //   console.log("Total Donation:", totalDonation);

    setMonthDonations(totalDonation)

  }


  const getYearDonations = async () => {

    const data = await axios.get(`http://localhost:5000/api/Donation`);
    const response = data.data
    console.log("***", response)

    const Abc = response?.map(c => ({ ...c, date: getTime(c.date) }))

    const filteredRecords = Abc.filter((record) => {
      const recordDate = new Date(record.date); // Convert the 'date' string to a Date object
      const today = new Date();

      const isSameDate =
        recordDate.getFullYear() === today.getFullYear();

      return isSameDate;
    });

    const Sum = filteredRecords
    let totalDonation = 0;

    for (let i = 0; i < Sum.length; i++) {
      const donationValue = parseFloat(Sum[i].Donation);

      if (!isNaN(donationValue)) {
        totalDonation += donationValue;
      }
    }

    //   console.log("Total Donation:", totalDonation);

    setYearDonations(totalDonation)

  }


  // .................Get Doners,...................    




  const getTotalDoners = async () => {
    const data = await axios.get(`http://localhost:5000/api/users`);
    var filteredDt = data.data.filter(x => x.Type === "doner")
    var Doners = filteredDt.length


    console.log(Doners)
    setTotalDoners(Doners);
  };





  // const getTodayDoners = async () => {
  //   const data = await axios.get(`http://localhost:5000/api/users`);
  //   var filteredDt = data.data.filter(x => x.Type == "doner")
  //   var Doners = filteredDt
  //   console.log(Doners)
  //   const Abc = Doners?.map(c => ({ ...c, date: getTime(c.date) }))
  //   console.log(Abc)
  //   const filteredRecords = Abc.filter((record) => {
  //     const recordDate = new Date(record.date); // Convert the 'date' string to a Date object
  //     const today = new Date();
  //     const isSameDate =
  //       recordDate.getDate() === today.getDate() &&
  //       recordDate.getMonth() === today.getMonth() &&
  //       recordDate.getFullYear() === today.getFullYear();
  //     return isSameDate;
  //   });
  //   const Total = filteredRecords.length
  //   console.log(Total)
  //   setTodayDoners(Total);
  // };

  const getMonthDoners = async () => {
    const data = await axios.get(`http://localhost:5000/api/users`);
    var filteredDt = data.data.filter(x => x.Type == "doner")
    var Doners = filteredDt

    const Abc = Doners?.map(c => ({ ...c, date: getTime(c.date) }))

    const filteredRecords = Abc.filter((record) => {
      const recordDate = new Date(record.date); // Convert the 'date' string to a Date object
      const today = new Date();

      const isSameDate =
        recordDate.getMonth() === today.getMonth() &&
        recordDate.getFullYear() === today.getFullYear();

      return isSameDate;
    });

    const Total = filteredRecords.length

    //  console.log(Total)
    setMonthDoners(Total);
  };

  const getYearDoners = async () => {
    const data = await axios.get(`http://localhost:5000/api/users`);
    var filteredDt = data.data.filter(x => x.Type == "doner")
    var Doners = filteredDt
    console.log(Doners)
    const Abc = Doners?.map(c => ({ ...c, date: getTime(c.date) }))
    console.log(Abc)
    const filteredRecords = Abc.filter((record) => {
      const recordDate = new Date(record.date); // Convert the 'date' string to a Date object
      const today = new Date();
      const isSameDate =
        recordDate.getFullYear() === today.getFullYear();
      return isSameDate;
    });
    const Total = filteredRecords.length
    console.log(Total)
    setYearDoners(Total);
  };




  useEffect(() => {
    getDonations()
    getMonthDonations()
    getYearDonations()

    getTotalDoners() 
    getMonthDoners()
    getYearDoners()
   

  }, []);


  return (
    <>

      <div className='container1'>
        <div className='chart-1 rounded-3'>
          <div className='chart1-section1'>
            <div className='chart1-dropd'>
              <select className="chart1select-dropdown " onChange={HandleChange1} id="inputGroupSelect02" placeholder="Enter Your State" required>
                <option selected  >Total </option>
                <option value={1}> This Month </option>
                <option value={2}> This Year </option>
              </select>
            </div>


            <div className='Total-Donations'>
              Total Donations
            </div>

            <div>
              {TotalDonationsVisible && (
                <div>
                  <div className='Total-Donations1'>
                    {TotalDonations}<span> pkr </span>
                  </div>
                </div>
              )}
            </div>

            <div>
              {MonthDonationsVisible && (
                <div>
                  <div className='Total-Donations1'>
                    {MonthDonations}<span> pkr </span>
                  </div>
                </div>
              )}
            </div>

            <div>
              {YearDonationsVisible && (
                <div>
                  <div className='Total-Donations1'>
                    {YearDonations}<span> pkr </span>
                  </div>
                </div>
              )}
            </div>




            <div className='Total-Donations2'>
              25% Less than Yestrday (2090 pkr)
            </div>
            <div className='Total-Donations3'>
              Compare with Goal or Past Year
              <div className='chart1-dropd1'>
                <select className="chart1select-dropdown1" onChange={HandleChange2} id="inputGroupSelect02" placeholder="Enter Your State" required>
                  <option selected>Today</option>
                  <option value={1}> This Month </option>
                  <option value={2}> This Year </option>
                </select>
              </div>
            </div>

          </div>
          <div className="grid-one-item grid-common grid-c1">
            <div className='grid-c1-content'>
              <div className='grid-chart'>
                <div className='chart-vert-value'>
                  <span style={{ paddingBlock: "0px" }}> 100000 </span>
                  <span style={{ paddingBlock: "10px" }}> 50000 </span>
                  <span style={{ paddingBlock: "10px" }}> 40000 </span>
                  <span style={{ paddingBlock: "10px" }}> 30000 </span>
                  <span style={{ paddingBlock: "10px" }}> 20000 </span>
                  <span style={{ paddingBlock: "10px" }}> 10000 </span>

                </div>

                {monthWiseCurrentYearDonation?.map((e, index) => {
                  console.log(index)
                  var value = e.value + "%"
                  if (e.value < 10000) {
                    value = "10%"
                  }
                  else if (e.value < 20000 && e.value > 10000) {
                    value = "20%"
                  }
                  else if (e.value < 30000 && e.value > 20000) {
                    value = "35%"
                  }
                  else if (e.value < 40000 && e.value > 30000) {
                    value = "45%"
                  }
                  else if (e.value < 50000 && e.value > 40000) {
                    value = "65%"
                  }
                  else if (e.value < 100000 && e.value > 50000) {
                    value = "80%"
                  }
                  return (
                    <div className='grid-chart-bar' >
                      <div className={'bar-warpper' + index}>
                        <div className='bar-item1' style={{ height: value }}></div>
                      </div>
                      <span className='grid-hortz-value'>{e.month.slice(0, 3)}</span>
                    </div>
                  )
                })}


                {/* 

                <div className='grid-chart-bar' >
                  <div className='bar-warpper2'>
                    <div className='bar-item1' style={{ height: "40%" }}></div>
                  </div>
                  <span className='grid-hortz-value'>Feb</span>
                </div>


                <div className='grid-chart-bar' >
                  <div className='bar-warpper3'>
                    <div className='bar-item1' style={{ height: "50%" }}></div>
                  </div>
                  <span className='grid-hortz-value'>Mar</span>
                </div>


                <div className='grid-chart-bar' >
                  <div className='bar-warpper4'>
                    <div className='bar-item1' style={{ height: "40%" }}></div>
                  </div>
                  <span className='grid-hortz-value'>Apr</span>
                </div>


                <div className='grid-chart-bar' >
                  <div className='bar-warpper5'>
                    <div className='bar-item1' style={{ height: "40%" }}></div>
                  </div>
                  <span className='grid-hortz-value'>May</span>
                </div>


                <div className='grid-chart-bar' >
                  <div className='bar-warpper6'>
                    <div className='bar-item1' style={{ height: "80%" }}></div>
                  </div>
                  <span className='grid-hortz-value'>Jun</span>
                </div>


                <div className='grid-chart-bar' >
                  <div className='bar-warpper7'>
                    <div className='bar-item1' style={{ height: "80%" }}></div>
                  </div>
                  <span className='grid-hortz-value'>Jul</span>
                </div>

                <div className='grid-chart-bar' >
                  <div className='bar-warpper8'>
                    <div className='bar-item1' style={{ height: "80%" }}></div>
                  </div>
                  <span className='grid-hortz-value'>Aug</span>
                </div>

                <div className='grid-chart-bar' >
                  <div className='bar-warpper9'>
                    <div className='bar-item1' style={{ height: "80%" }}></div>
                  </div>
                  <span className='grid-hortz-value'>Sep</span>
                </div>


                <div className='grid-chart-bar' >
                  <div className='bar-warpper10'>
                    <div className='bar-item1' style={{ height: "80%" }}></div>
                  </div>
                  <span className='grid-hortz-value'>Oct</span>
                </div>


                <div className='grid-chart-bar' >
                  <div className='bar-warpper11'>
                    <div className='bar-item1' style={{ height: "80%" }}></div>
                  </div>
                  <span className='grid-hortz-value'>Nov</span>
                </div>


                <div className='grid-chart-bar' >
                  <div className='bar-warpper12'>
                    <div className='bar-item1' style={{ height: "80%" }}></div>
                  </div>
                  <span className='grid-hortz-value'>Dec</span>
                </div> */}


              </div>
            </div>
            {/* <Chart type="bar"  data={chartData} options={chartOptions} /> */}
          </div>
        </div>

        <div className='chart-2 rounded-3'>
          <div id="progress-bar-container">
            <div className="progress-bar-child progress"></div>
            <div className="progress-bar-child shrinker timelapse"></div>
          </div>
        </div>
      </div>



      {/* ........................Chart 3....................... */}
      <div className='container2'>
        <div className='chart-3 rounded-3'>
          <div className='fst-section'>
            <div className='chart3-icon'>
              <i className="doller-icon"> <BiDollar />  </i>
            </div>
            <div className='chart3-text1'>Donations
            <div>
              {TotalDonationsVisiblechart3 && (
                <div>
                   <div className='chart3-text2'> <span>Rs {TotalDonations} </span> </div>
                </div>
              )}
            </div>

            <div>
              {MonthDonationsVisiblechart3 && (
                <div>
                   <div className='chart3-text2'> <span>Rs {MonthDonations} </span> </div>
                </div>
              )}
            </div>

            <div>
              {YearDonationsVisiblechart3 && (
                <div>
                   <div className='chart3-text2'> <span>Rs {YearDonations} </span> </div>
                </div>
              )}
            </div>
            
            </div>
          </div>
          <div className='chart3-dropd'>
            <select className="select-dropdown " onChange={HandleChange3} id="inputGroupSelect02" placeholder="Enter Your State" required>
              <option selected >Total</option>
              <option value={1}> This Month </option>
              <option  value={2}> This Year </option>
            </select>

          </div>
        </div>

        {/* ....................Chart 4.........................*/}


        <div className='chart-4 rounded-3'>
          <div className='fst-section'>
            <div className='chart4-icon'>
              <i className="BiUser-icon"> <BiUser />  </i>
            </div>
            <div className='chart3-text1'>Total Doners
            <div>
              {TotalDonersVisiblechart4 && (
                <div>
                   <div className='chart3-text2'> <span> {TotalDoners} </span> </div>
                </div>
              )}
            </div>

            <div>
              {MonthDonersVisiblechart4 && (
                <div>
                   <div className='chart3-text2'> <span> {MonthDoners} </span> </div>
                </div>
              )}
            </div>

            <div>
              {YearDonersVisiblechart4 && (
                <div>
                   <div className='chart3-text2'> <span> {YearDoners} </span> </div>
                </div>
              )}
            </div>
            
            </div>
          </div>
          <div className='chart3-dropd'>
            <select className="select-dropdown " onChange={HandleChange4} id="inputGroupSelect02" placeholder="Enter Your State" required>
              <option selected >Total</option>
              <option value={1}> This Month </option>
              <option  value={2} > This Year </option>
            </select>
          </div>
        </div>


        {/* ..................Chart 5.............. */}

        <div className='chart-5 rounded-3'>
          <div className='chart5-section1'>
            <div className='chart5-dropd'>
              <select className="chart5select-dropdown " onChange={HandleChange5} id="inputGroupSelect02" placeholder="Enter Your State" required>
                <option selected>Total</option>
                <option value={1}> This Month </option>
                <option value={2}> This Year </option>
              </select>
            </div>

            <div className='chart5-text1'>
              New Doners
              <div>
              {TotalDonersVisiblechart5 && (
                <div>
                    <div className='chart5-text2'> <span> {TotalDoners} </span>  </div>
                </div>
              )}
            </div>

            <div>
              {MonthDonersVisiblechart5 && (
                <div>
                    <div className='chart5-text2'> <span> {MonthDoners} </span>  </div>
                </div>
              )}
            </div>

            <div>
              {YearDonersVisiblechart5 && (
                <div>
                    <div className='chart5-text2'> <span> {YearDoners} </span>  </div>
                </div>
              )}
            </div>
            
            </div>

            <div className='chart5-text3'>
              Donation Amount
              <div>
              {TotalDonationsVisiblechart5 && (
                <div>
                     <div className='chart5-text4'> <span> {TotalDonations} </span> pkr </div>
                </div>
              )}
            </div>
            

            <div>
              {MonthDonationsVisiblechart5 && (
                <div>
                     <div className='chart5-text4'> <span> {MonthDonations} </span> pkr </div>
                </div>
              )}
            </div>

            <div>
              {YearDonationsVisiblechart5 && (
                <div>
                     <div className='chart5-text4'> <span> {YearDonations} </span> pkr </div>
                </div>
              )}
            </div>

            </div>
          </div>
          <div className='chart5-section2'>
            {/* <div className='chart5-circularbar1'> */}
            <div label="Default" className='chart5-circularbar1'>
              <CircularProgressbar value={percentage} text={`${percentage}%`} />
            </div>
            <div label="Default" className='chart5-circularbar2'>
              <CircularProgressbar styles={{
                path: {
                  stroke: `rgb(249 197 42)`
                },
              }} className='circulabar-color' value={percentageDoners} text={`${percentageDoners}% `} />
            </div>

            {/* </div> */}

          </div>
          <button className='chart5-button' >Send Message</button>
        </div>


        {/* ...............Chart6................. */}

        <div className='chart-6 rounded-3'>
          <div className='chart6-section1'>
            <div className='chart6-dropd'>
              <select className="chart6select-dropdown " onChange={HandleChange6} id="inputGroupSelect02" placeholder="Enter Your State" required>
                <option selected >Today</option>
                <option value={1}> This Month </option>
                <option value={2}> This Year </option>
              </select>
            </div>

            <div className='chart6-text1'>
              New Doners
              <div className='chart6-text2'> <span> {TotalDoners} </span>  </div>
            </div>

            <div className='chart6-text3'>
              Donations Amount
              <div className='chart6-text4'> <span> {TotalDonations} </span> pkr </div>
            </div>
          </div>
          <div className='chart6-section2'>
            {/* <div className='chart5-circularbar1'> */}
            <div label="Default" className='chart6-circularbar1'>
              <CircularProgressbar value={percentage} text={`${percentage}%`} />
            </div>
            <div label="Default" className='chart6-circularbar2'>
              <CircularProgressbar styles={{
                path: {
                  stroke: `rgb(249 197 42)`
                },
              }} value={percentageDoners} text={`${percentageDoners}%`} />
            </div>

            {/* </div> */}

          </div>
          <button className='chart6-button' >Send Message</button>
        </div>

        {/* .................Chart7................  */}

        <div className='chart-7 rounded-3'>
          <div className='chart7-section1'>
            <div className='chart7-dropd'>
              <select className="chart7select-dropdown " onChange={(e) => setChart7Value(e.target.value)} id="inputGroupSelect02" placeholder="Enter Your State" required>
                <option selected >Today</option>
                <option value={1}> This Month </option>
                <option value={2}> This Year </option>
              </select>
            </div>

            <div className='chart7-text1'>
              New Doner
              <div className='chart7-text2'> <span> {TotalDonations} </span>  </div>
            </div>

            <div className='chart7-text3'>
              New Doner
              <div className='chart7-text4'> <span> {TotalDonations} </span> pkr </div>
            </div>
          </div>
          <div className='chart7-section2'>
            {/* <div className='chart5-circularbar1'> */}
            <div label="Default" className='chart7-circularbar1'>
              <CircularProgressbar value={percentage} text={`${percentage}%`} />
            </div>
            <div label="Default" className='chart7-circularbar2'>
              <CircularProgressbar styles={{
                path: {
                  stroke: `rgb(249 197 42)`
                },
              }} className='circulabar-color' value={percentageDoners} text={`${percentageDoners}%`} />
            </div>

            {/* </div> */}

          </div>
          <button className='chart7-button' >Send Message</button>
        </div>


        {/* .................Chart8................  */}

        <div className='chart-8 rounded-3'>
          <div className='chart8-section1'>
            <div className='chart8-dropd'>
              <select className="chart8select-dropdown " value={chart8Value} onChange={(e) => setChart8Value(e.target.value)} id="inputGroupSelect02" placeholder="Enter Your State" required>
                <option selected >Today</option>
                <option value={1}> This Month </option>
                <option value={2}> This Year </option>
              </select>
            </div>

            <div className='chart8-text1'>
              New Doner
              <div className='chart8-text2'> <span> {TotalDonations} </span>  </div>
            </div>

            <div className='chart8-text3'>
              New Doner
              <div className='chart8-text4'> <span> {TotalDonations} </span> pkr </div>
            </div>
          </div>
          <div className='chart8-section2'>
            {/* <div className='chart5-circularbar1'> */}
            <div label="Default" className='chart8-circularbar1'>
              <CircularProgressbar value={percentage} text={`${percentage}%`} />
            </div>
            <div label="Default" className='chart8-circularbar2'>
              <CircularProgressbar styles={{
                path: {
                  stroke: `rgb(249 197 42)`
                },
              }} className='circulabar-color' value={percentageDoners} text={`${percentageDoners}%`} />
            </div>

            {/* </div> */}

          </div>
          <button className='chart8-button' >Send Message</button>
        </div>




      </div>




      {/* <div className='card'>
                  
                </div>
                 <div className='card'>
                    <div className='card-inner'>
                         <h3>Today Doner Sign up</h3>
                         <FcDonate className='card_icon' />
                     </div>
                     <h1>{TodayDoners}</h1>
                </div>
                 <div className='card'>
                     <div className='card-inner'>
                         <h3>This Month Doners Sign up</h3>
                         <BsPeopleFill className='card_icon' />
                     </div>
                     <h1>{MonthDoners}</h1>
                 </div>
              */}


    </>
  )
}

export default Home