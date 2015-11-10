function validate()
{
   var SID1    = document.getElementById("SID1").value;
   var last1   = document.getElementById('Last1').value;
   var first1  = document.getElementById('First1').value;
   var unit1   = document.getElementById('U1').value;
   var bldg1   = document.getElementById('B1').value;
   var room1   = document.getElementById('R1').value;
   var t1      = document.getElementById('T1').value;
   var email1  = document.getElementById('EM1').value;
   var SID2    = document.getElementById('SID2').value;
   var last2   = document.getElementById('Last2').value;
   var first2  = document.getElementById('First2').value;
   var unit2   = document.getElementById('U2').value;
   var bldg2   = document.getElementById('B2').value;
   var room2   = document.getElementById('R2').value;
   var t2      = document.getElementById('T2').value;
   var email2  = document.getElementById('EM2').value;
   var SID3    = document.getElementById('SID3').value;
   var last3   = document.getElementById('Last3').value;
   var first3  = document.getElementById('First3').value;
   var unit3   = document.getElementById('U3').value;
   var bldg3   = document.getElementById('B3').value;
   var room3   = document.getElementById('R3').value;
   var t3      = document.getElementById('T3').value;
   var email3  = document.getElementById('EM3').value;
   var SID4    = document.getElementById('SID4').value;
   var last4   = document.getElementById('Last4').value;
   var first4  = document.getElementById('First4').value;
   var unit4   = document.getElementById('U4').value;
   var bldg4   = document.getElementById('B4').value;
   var room4   = document.getElementById('R4').value;
   var t4      = document.getElementById('T4').value;
   var email4  = document.getElementById('EM4').value;
   var SID5    = document.getElementById('SID5').value;
   var last5   = document.getElementById('Last5').value;
   var first5  = document.getElementById('First5').value;
   var unit5   = document.getElementById('U5').value;
   var bldg5   = document.getElementById('B5').value;
   var room5   = document.getElementById('R5').value;
   var t5      = document.getElementById('T5').value;
   var email5  = document.getElementById('EM5').value;
   var SID6    = document.getElementById('SID6').value;
   var last6   = document.getElementById('Last6').value;
   var first6  = document.getElementById('First6').value;
   var unit6   = document.getElementById('U6').value;
   var bldg6   = document.getElementById('B6').value;
   var room6   = document.getElementById('R6').value;
   var t6      = document.getElementById('T6').value;
   var email6  = document.getElementById('EM6').value;
   var SID7    = document.getElementById('SID7').value;
   var last7   = document.getElementById('Last7').value;
   var first7  = document.getElementById('First7').value;
   var unit7   = document.getElementById('U7').value;
   var bldg7   = document.getElementById('B7').value;
   var room7   = document.getElementById('R7').value;
   var t7      = document.getElementById('T7').value;
   var email7  = document.getElementById('EM7').value;
   var SID8    = document.getElementById('SID8').value;
   var last8   = document.getElementById('Last8').value;
   var first8  = document.getElementById('First8').value;
   var unit8   = document.getElementById('U8').value;
   var bldg8   = document.getElementById('B8').value;
   var room8   = document.getElementById('R8').value;
   var t8      = document.getElementById('T8').value;
   var email8  = document.getElementById('EM8').value;

   var SID9    = document.getElementById('SID9').value;
   var last9   = document.getElementById('Last9').value;
   var first9  = document.getElementById('First9').value;
   var unit9   = document.getElementById('U9').value;
   var bldg9   = document.getElementById('B9').value;
   var room9   = document.getElementById('R9').value;
   var t9      = document.getElementById('T9').value;
   var email9  = document.getElementById('EM9').value;
   var SID10    = document.getElementById('SID10').value;
   var last10   = document.getElementById('Last10').value;
   var first10  = document.getElementById('First10').value;
   var unit10   = document.getElementById('U10').value;
   var bldg10   = document.getElementById('B10').value;
   var room10   = document.getElementById('R10').value;
   var t10      = document.getElementById('T10').value;
   var email10  = document.getElementById('EM10').value;
   
   var team     = document.getElementById('team').value;
   var cname    = document.getElementById('cname').value;
   var cp       = document.getElementById('cp').value;
   var vname    = document.getElementById('vname').value;
   var vp      = document.getElementById('vp').value;

   //Check Student ID
   if(SID1.length != 8 || SID2.length != 8 || SID3.length != 8 || SID4.length != 8 ||
      SID5.length != 8 || SID6.length != 8 || SID7.length != 8 || SID8.length != 8)
   {
      document.getElementById('failure').innerHTML="Bad Student ID";
      document.getElementById('failure').style.color="red";
      return false;
   }
   
   //Check last names
   if(last1=="" || last2=="" || last3=="" || last4=="" ||
      last5=="" || last6=="" || last7=="" || last8=="")
   {
      document.getElementById('failure').innerHTML="Invalid Last Name";
      document.getElementById('failure').style.color="red";
      return false;
   }

   //Check first names
   if(first1 =="" || first2 =="" || first3 =="" || first4 =="" ||
      first5 =="" || first6 =="" || first7 =="" || first8 =="")
   {
      document.getElementById('failure').innerHTML="Invalid First Name";
      document.getElementById('failure').style.color="red";
      return false;
   }
   
   //Check unit
   if(unit1 =="" || unit2=="" || unit3=="" || unit4=="" ||
      unit5 =="" || unit6=="" || unit7=="" || unit8=="")
   {
      document.getElementById('failure').innerHTML="Invalid Unit";
      document.getElementById('failure').style.color="red";
      return false;
   }
   
   //Check building
   if(bldg1 == "" || bldg2 == "" || bldg3 == "" || bldg4=="" ||
      bldg5 == "" || bldg6 == "" || bldg7 == "" || bldg8=="")
   {
      document.getElementById('failure').innerHTML="Invalid Building";
      document.getElementById('failure').style.color="red";
      return false;
   }
   
   //Check room
   if(room1 == "" || room2 == "" || room3 == "" || room4 == "" ||
      room5 == "" || room6 == "" || room7 == "" || room8 == "")
   {
      document.getElementById('failure').innerHTML="Invalid Room";
      document.getElementById('failure').style.color="red";
      return false;
   }
   
   //Check shirts
   if(t1 == "" || t2 == "" || t3 == "" || t4 == "" ||
      t5 == "" || t6 == "" || t7 == "" || t8 == "")
   {
      document.getElementById('failure').innerHTML="Invalid Shirt Size";
      document.getElementById('failure').style.color="red";
      return false;
   }
   
   //Check emails
   if(email1 == "" || email2 == "" || email3 == "" || email4 == "" ||
      email5 == "" || email6 == "" || email7 == "" || email8 == "")
   {
      document.getElementById('failure').innerHTML="Missing Email, Check Again";
      document.getElementById('failure').style.color="red";
      return false;
   }
   
   //Check 9th Form, all on or all off
   if (!( (SID9.length != "" && last9 != "" && first9 != "" && unit9 != "" &&
        bldg9 != "" && room9 != "" && t9 != "" && email9 != "")
        
        ||
        
        (SID9.length == "" && last9 == "" && first9 == "" && unit9 == "" &&
        bldg9 == "" && room9 == "" && t9 == "" && email9 == "")))
   {
      document.getElementById('failure').innerHTML="Incomplete 9th Form, Please Fill Out Completely or Leave Empty";
      document.getElementById('failure').style.color="red";
      return false;
   }
   
   //Check 10th Form, all on or all off
   if (!( (SID10.length != "" && last10 != "" && first10 != "" && unit10 != "" &&
        bldg10 != "" && room10 != "" && t10 != "" && email10 != "")
        
        ||
        
        (SID10.length == "" && last10 == "" && first10 == "" && unit10 == "" &&
        bldg10 == "" && room10 == "" && t10 == "" && email10 == "")))
   {
      document.getElementById('failure').innerHTML="Incomplete 10th Form, Please Fill Out Completely or Leave Empty";
      document.getElementById('failure').style.color="red";
      return false;
   }
   
   //Check Team Stuff
   if ( team == "" )
   {
      document.getElementById('failure').innerHTML="Need Valid Team Name";
      document.getElementById('failure').style.color="red";
      return false;
   }
   if ( cname == "" )
   {
      document.getElementById('failure').innerHTML="Need Valid Captain Name";
      document.getElementById('failure').style.color="red";
      return false;
   }
   if ( cp == "" )
   {
      document.getElementById('failure').innerHTML="Need Valid Captain Phone Number";
      document.getElementById('failure').style.color="red";
      return false;
   }
   if ( vname == "" )
   {
      document.getElementById('failure').innerHTML="Need Valid Vice Captain Name";
      document.getElementById('failure').style.color="red";
      return false;
   }
   if ( vp == "" )
   {
      document.getElementById('failure').innerHTML="Need Valid Vice Captain Phone Number";
      document.getElementById('failure').style.color="red";
      return false;
   }
   
   return true;
}
