let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let my_Employees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia"];
document.write('<div>We Have X Admins</div>');

let admin_number;

for (let i=0;i<myAdmins.length;i++)
    {
        if (myAdmins[i]==='Stop')
        {
            admin_number = i;
            break;
        }
    }

document.write(`<div>We Have ${admin_number} Admins</div>`);
document.write('<hr>');

for (let i=0;i<admin_number;i++)
{

    console.log(i)
    document.write(`<div>The admin of team ${i+1}  is ${myAdmins[i]}</div>`);
    document.write(`<h2>Team members</h2>`)

    for (let j=0;j<my_Employees.length;j++)
    {
        if(myAdmins[i].charAt(0)===my_Employees[j].charAt(0))
        {
            document.write(`${my_Employees[j]} <br>`)

        }



    }

    document.write('<hr>');
}