

export default function Logo({prop}) {

   
    let type = 'default'
    let path = '/images/logo.svg';
    if (prop == 'muted') {
        type = 'muted'
        path = '/images/logo-muted.svg'

    }



    return (

        <img src={path} type={type} alt="Logo" />
    )
}