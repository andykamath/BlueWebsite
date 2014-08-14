var thisday = new Date();
var today=thisday.getDay();
switch(new Date().getDay())
{
    case 1:
        document.write("4:00pm-10:00pm");
        break;
    case 2:  
        document.write("4:00pm-10:00pm");
        break;
    case 3:
        document.write("4:00pm-12:00am");
        break;
    case 4:
        document.write("4:00pm-12:00am");
        break;
    case 5:
        document.write("4:00pm-2:00am");
        break;
    case 6:
        document.write("4:00pm-2:00am");
        break;
    case default:
        document.write("Sorry, the restaurant is closed today");
}