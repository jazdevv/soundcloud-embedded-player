import { useEffect } from "react";

type Props = {
    soundCloudLink: string,
    className?: string,
    width: number,
    height: number,
    color?: string, //color play button and other controls
    auto_play?: boolean,//setted to false improve ux, with true the style looks diferent and takes so time to autostart the music
    buying?: boolean, //default setted as false
    sharing?: boolean, //default setted as false
    download?: boolean, //default setted as false
    show_artwork?: boolean, //default setted as false
    show_playcount?: boolean,
    show_user?: boolean,
    start_track?: number,
    single_active?: boolean
}

export default function SoundCloudEmbedder({soundCloudLink,width,height,className,auto_play
    ,buying,sharing,download,show_artwork,show_playcount,show_user,start_track,single_active}: Props){

    const soundCloudWidgetSrcUrl = `https://w.soundcloud.com/player/?url=${soundCloudLink}${
        auto_play != undefined  ? `&auto_play=${auto_play}` : ''}${
        download != undefined ? `&download=${download}` : '&download=false'}${
        buying != undefined  ? `&buying=${buying}` : '&buying=false'}${
        sharing != undefined  ? `&sharing=${sharing}` : '&sharing=false'}${
        show_artwork != undefined  ? `&show_artwork=${show_artwork}` : '&show_artwork=false'}${
        show_playcount != undefined  ? `&show_playcount=${show_playcount}` : ''}${
        show_user != undefined  ? `&show_user=${show_user}` : ''}${
        start_track != undefined ? `&start_track=${start_track}` : ''}${
        single_active != undefined  ? `&single_active=${single_active}` : ''}
        
    `

    return <div>
        <iframe width={width} height={height} allow="autoplay" className={className != undefined ? className : ''} 
            src={soundCloudWidgetSrcUrl}>
        </iframe>
    </div>
}
