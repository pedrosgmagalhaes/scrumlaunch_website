function dateConverter( date_str, variant = 1 ){

    let months_short = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let months_full = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    let date_arr = date_str.match(/(\d{4,4})-(\d{1,2})-(\d{1,2})/);
    
    let date_output_str = ''

    switch (variant) {
        case 1: {
            let month = date_arr[2][0] === '0' ? parseInt(date_arr[2].substring(1)) - 1 : parseInt(date_arr[2]) - 1
            let year = date_arr[1].length === 4 ? date_arr[1].substring(2) : date_arr[1]
            date_output_str = date_arr[3] + ' ' + months_short[month] + ' ' + year;
            break;
        }

        case 2: {
            let month = date_arr[2][0] === '0' ? parseInt(date_arr[2].substring(1)) - 1 : parseInt(date_arr[2]) - 1
            let year = date_arr[1]
            date_output_str = months_full[month] + ' ' + date_arr[3] + ', ' + year;
            break;
        }
    }

    return date_output_str;
}



module.exports = {
    dateConverter,
}
