import React from 'react'

const Links = () => {
    const links = [
        {
            name: 'Mi portfolio web',
            link: 'https://borgesmj.github.io/'
        },
        {
            name: 'Mi perfil en Github',
            link: 'https://github.com/borgesmj'
        },
        {
            name: 'Tienda Personal',
            link: 'https://sweet-bites.co/'
        },
        {
            name: 'Codepen',
            link: 'https://codepen.io/borgesmj'
        },
        {
            name: 'Linkedin',
            link: 'https://www.linkedin.com/in/borgesmj/'
        }
    ]
  return (
    <div className='w-full'>
      {
        links.map((link, index) => (
            <a href={link.link} className={`flex flex-row justify-center items-center border-solid border-black border-[2px] rounded-xl py-2 mt-2 h-fit md:py-3 text-center text-xs font-bold hover:bg-[#ffffff] hover:border-white hover:cursor-pointer`} target="_blank" key={index}>{link.name}</a>
        ))
      }
    </div>
  )
}

export default Links
