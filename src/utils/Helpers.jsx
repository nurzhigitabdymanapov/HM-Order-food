export const  getBackgroundColor = (props)=>{
return props.variant === "container"?'#8a2b06':'#fff';
}
export const getBorderRadius = (props)=>{
    return props.borderRadius === "rounder"?'20px':'6px'
}
export const getColor = (props)=>{
    return props.variant === "container"?'#fff':'#8a2b06'
}
export const getBorder = (props)=>{
    return props.variant === "container"?'none':'1px solid #8a2b06'
}
