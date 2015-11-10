#!/usr/local/bin/perl -w

# use CGI;
# $sendmail = "/usr/lib/sendmail";

# $query = new CGI;
# $to      = 'amazingbearhunt2010@gmail.com';
# $cc      = 'triggerazura@gmail.com';
# $name    = 'abh';
# $subject = 'ABH Submission';

# $sid1     = $query->param('SID1');
# $last1    = $query->param('Last1');
# $first1   = $query->param('First1');
# $unit1    = $query->param('U1');
# $bldg1    = $query->param('B1');
# $room1    = $query->param('R1');
# $t1       = $query->param('T1');
# $em1      = $query->param('EM1');

# $sid2     = $query->param('SID2');
# $last2    = $query->param('Last2');
# $first2   = $query->param('First2');
# $unit2    = $query->param('U2');
# $bldg2    = $query->param('B2');
# $room2    = $query->param('R2');
# $t2       = $query->param('T2');
# $em2      = $query->param('EM2');

# $sid3     = $query->param('SID3');
# $last3    = $query->param('Last3');
# $first3   = $query->param('First3');
# $unit3    = $query->param('U3');
# $bldg3    = $query->param('B3');
# $room3    = $query->param('R3');
# $t3       = $query->param('T3');
# $em3      = $query->param('EM3');

# $sid4     = $query->param('SID4');
# $last4    = $query->param('Last4');
# $first4   = $query->param('First4');
# $unit4    = $query->param('U4');
# $bldg4    = $query->param('B4');
# $room4    = $query->param('R4');
# $t4       = $query->param('T4');
# $em4      = $query->param('EM4');

# $sid5     = $query->param('SID5');
# $last5    = $query->param('Last5');
# $first5   = $query->param('First5');
# $unit5    = $query->param('U5');
# $bldg5    = $query->param('B5');
# $room5    = $query->param('R5');
# $t5       = $query->param('T5');
# $em5      = $query->param('EM5');

# $sid6     = $query->param('SID6');
# $last6    = $query->param('Last6');
# $first6   = $query->param('First6');
# $unit6    = $query->param('U6');
# $bldg6    = $query->param('B6');
# $room6    = $query->param('R6');
# $t6       = $query->param('T6');
# $em6      = $query->param('EM6');

# $sid7     = $query->param('SID7');
# $last7    = $query->param('Last7');
# $first7   = $query->param('First7');
# $unit7    = $query->param('U7');
# $bldg7    = $query->param('B7');
# $room7    = $query->param('R7');
# $t7       = $query->param('T7');
# $em7      = $query->param('EM7');

# $sid8     = $query->param('SID8');
# $last8    = $query->param('Last8');
# $first8   = $query->param('First8');
# $unit8    = $query->param('U8');
# $bldg8    = $query->param('B8');
# $room8    = $query->param('R8');
# $t8       = $query->param('T8');
# $em8      = $query->param('EM8');

# $sid9     = $query->param('SID9');
# $last9    = $query->param('Last9');
# $first9   = $query->param('First9');
# $unit9    = $query->param('U9');
# $bldg9    = $query->param('B9');
# $room9    = $query->param('R9');
# $t9       = $query->param('T9');
# $em9      = $query->param('EM9');

# $sid10     = $query->param('SID10');
# $last10    = $query->param('Last10');
# $first10   = $query->param('First10');
# $unit10    = $query->param('U10');
# $bldg10    = $query->param('B10');
# $room10    = $query->param('R10');
# $t10       = $query->param('T10');
# $em10      = $query->param('EM10');

# $team      = $query->param('team');
# $cname     = $query->param('cname');
# $cp        = $query->param('cp');
# $vname     = $query->param('vname');
# $vp        = $query->param('vp');


# open(OUT, "|$sendmail -t");

# print OUT <<Stuff
# To: $to
# CC: $cc
# From: $name
# Subject: $subject
# Form Information
# $sid1
# $last1 $first1
# $unit1 $bldg1 $room1
# $t1
# $em1

# $sid2
# $last2 $first2
# $unit2 $bldg2 $room2
# $t2
# $em2

# $sid3
# $last3 $first3
# $unit3 $bldg3 $room3
# $t3
# $em3

# $sid4
# $last4 $first4
# $unit4 $bldg4 $room4
# $t4
# $em4

# $sid5
# $last5 $first5
# $unit5 $bldg5 $room5
# $t5
# $em5

# $sid6
# $last6 $first6
# $unit6 $bldg6 $room6
# $t6
# $em6

# $sid7
# $last7 $first7
# $unit7 $bldg7 $room7
# $t7
# $em7

# $sid8
# $last8 $first8
# $unit8 $bldg8 $room8
# $t8
# $em8

# $sid9
# $last9 $first9
# $unit9 $bldg9 $room9
# $t9
# $em9

# $sid10
# $last10 $first10
# $unit10 $bldg10 $room10
# $t10
# $em10

# Team: $team
# Captain: $cname $cp
# Vice Captain: $vname $vp

# ----
# END OF FORM
# Stuff
# ;
# close(OUT);

$returnpage = "http://abh.berkeley.edu/thanks.html";
print $query->redirect($returnpage);

exit 0;