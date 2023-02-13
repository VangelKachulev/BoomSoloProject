

export function Logo({ props }) {
    console.log(props);
    let type = 'defaults';
    let path = '/images/logo.svg';
    if (props == 'muted') {
        type = 'muted';
        path = '/images/logo-muted.svg'

    }



    return (
        <img src={path} type={type} alt="Logo" />
    )
}