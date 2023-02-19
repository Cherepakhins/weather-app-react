const today = new Date();
const hours = today.getHours();

if(19 < hours < 24 || hours < 7){
    document.body.classList.add('dark');
} else {
    const isDark = document.body.classList.remove('dark');

    if(isDark){
        localStorage.setItem('darkMode', 'dark');
    } else{
        localStorage.setItem('darkMode', 'light'); 
    }
}