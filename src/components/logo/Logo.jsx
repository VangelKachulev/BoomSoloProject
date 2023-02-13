

export default function Logo({type}) {

   
    let defaultType = 'default'
    let path = '/images/logo.svg';
    if (type == 'muted') {
        defaultType = 'muted'
        path = '/images/logo-muted.svg'

    }



    return (

        <img src={path} type={defaultType} alt="Logo" />
    )
}