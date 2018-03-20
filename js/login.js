function check(form)
{
    if(form.userid.value == "Roseindia" && form.pwd.value == "Roseindia")
    {
	      return true;
    }
    else
    {
	     alert("Error Password or Username")
	     return false;
    }
}
