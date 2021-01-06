

import {fromJS} from 'immutable';

const defaultState = fromJS({
  topicList:[{
      id:1,
      title:"news",
      imgUrl:"https://cdn.searchenginejournal.com/wp-content/uploads/2018/11/3-Strategies-You-Can-Use-on-Social-Media-to-Boost-Your-SEO-1520x800.png",
  },{
      id:2,
      title:"movie",
      imgUrl:"https://media.istockphoto.com/photos/movie-projector-on-dark-background-picture-id1007557230?k=6&m=1007557230&s=612x612&w=0&h=2c6NHjfH4sWCgTNoZCDLQx10_PdIfl-dI-nyZ9wF_jI=",
  },{
      id:3,
      title:"music",
      imgUrl:"https://image.shutterstock.com/image-illustration/3d-illustration-musical-notes-signs-260nw-761313844.jpg"
  }],
  articleList:[{
      id:1,
      title:'What is a blog newsletter?',
      desc: 'Despite its referral to “news,” a blog newsletter doesn’t require updates of what’s happened in your business. A good newsletter is written for its recipients, not its sender.',
      imgUrl:'https://www.jeffbullas.com/wp-content/uploads/2019/04/The-Art-of-Influencer-Marketing-For-Solopreneurs-and-Small-Business-768x512.jpg',
  },
{
    id:2,
    title:'No time to write? These 4 routines cut my writing time by 50%',
    desc: 'Check out these 4 routines that cut my writing time by 50%.',
    imgUrl:'https://www.oxfordlearning.com/wp-content/uploads/2016/11/AdobeStock_97486436-860x420.jpeg',
},
{
    id:3,
    title:'Do you know this #1 fiction writing trick for compelling business content?',
    desc: 'Want to know which fiction trick every business writer should use?Check out today’s trick for writing more compelling business content.',
    imgUrl:'https://mk0hootsuiteblof6bud.kinstacdn.com/wp-content/uploads/2019/01/instagram-for-business.svg',
},
{
    id:4,
    title:'How Pro Writers Nurture Their Skills (Without Paying for Expensive Courses)',
    desc: 'Most writing gurus tell you to write more and read more.That’s useful advice.But it’s not the best advice.',
    imgUrl:'https://resumegenius.com/wp-content/uploads/resume-soft-skills-hero-500x333.png',
},
]
});

export default(state = defaultState,action)=> {
    switch(action.type){
        
              
        default:
            return state;                
    }
}