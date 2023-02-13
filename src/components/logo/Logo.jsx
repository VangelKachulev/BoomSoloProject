

export default function Logo(prop) {

    console.log(prop);
    let type = 'default'
    let path = '/images/logo.svg';
    if (prop.props == 'muted') {
        type = 'muted'
        path = '/images/logo-muted.svg'

    }



    return (

        <img src={path} type={type} alt="Logo" />
    )
}