import styled from 'styled-components';

export  const HomeWrapper = styled.div `
overflow:hidden;
width: 960px;
margin: 0 auto;
`;

export  const HomeLeft = styled.div `
float:left;
margin-left: 15px;
padding-top:30px;
width: 625px;
.banner-img{
    width: 625px;
    height: 270px;
}
`;
export  const HomeRight = styled.div `
float:right;
width: 240px;
`; 
export  const TopicWrapper = styled.div `
padding: 20px 0 10px 0;
overflow:hidden;
margin-left:-10px;
border-bottom:1px solid #dcdcdc;
`; 
export const TopicItem = styled.div `
    float:left;
    background:#f7f7f7;
    height:32px;
    padding-right:10px;
    margin-left:18px;
    line-height:32px;
    font-size:14px;
    margin-bottom:18px;
    color:#000;
    border: 1px solid #dcdcdc;
    border-radius:4px;
    .topic-pic{
        display:block;
        float:left;
        width:32px;
        height:32px;
        margin-right:10px;
    
    }
`;
export const ListItem = styled.div `
padding: 20px 0;
overflow:hidden;
border-bottom: 1px solid #dcdcdc;
.pic{
    display:block;
    width:125px;
    height:100px;
    float:right;
    border-radius :10px;
}
`;
export const ListInfo= styled.div `
width:500px;
float:left;
.title{
    line-height:27px;
    font-size:18px;
    font-weight:bold;
    volor: #333;
}
.desc{
    font-size:13px;
    color:#999;
    line-height:24px;
}
`;