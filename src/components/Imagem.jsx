import img1 from '../assets/imgs/img1.jpg'
import img2 from '../assets/imgs/img2.jpg'
import img3 from '../assets/imgs/img3.jpg'
import img4 from '../assets/imgs/img4.jpg'


const Imagem = () => {

    function Img(props){
        return <img src={props.url} alt={props.desc} />
    }


    const imagens = [
        {id:1,url:img1, altText: "Imagem de entardecer"},
        {id:2,url:img2, altText: "Imagem floresta"},
        {id:3,url:img3, altText: "Homens jogando basquete"},
        {id:4,url:img4, altText: "Mulheres jogando basquete"}
    ]

    return(
        <>
        <h1>Imagens Aleatórias</h1>
        {imagens.map((imagem)=> <Img url={imagem.url} desc={imagem.altText}/>)}
        </>
    )

}

export default Imagem