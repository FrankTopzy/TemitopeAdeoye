import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import CodeIcon from '@mui/icons-material/Code';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import Tilt  from 'react-parallax-tilt';
import { FaTree } from 'react-icons/fa6';
import { motion } from 'framer-motion';

type TimelineDataType = {
  period: string;
  role: string;
  company_skill: string;
  thingsLearnt: string[];
}

const timelineData: TimelineDataType[] = [{
  period: "January 2022 - January 2023",
  role: "Graphics Designer",
  company_skill: "Canva | Graphics Design ",
  thingsLearnt: [
    "Acquired hands-on knowledge of Graphics Design, delving into the design world.",
    "Also gaining a solid foundation in UI/UX design."
  ]
}, {
  period: "April 2023 - June 2026",
  role: "Computer Science",
  company_skill: "FUNAAB | CSC",
  thingsLearnt: [
    "Started my BSC program with the aim of becoming an exceptional Computer Scientist.",
    "Learnt the basics of Data Structures and Algorithm.",
    "I was introduced to some languages such as Python, C, C++, Java and PHP."
  ]
}, {
  period: "May 2024 - December 2025",
  role: "Frontend Developer",
  company_skill: "SuperSimpleDev and Co. | Software Engineering",
  thingsLearnt: [
    "Learnt the basics of Web development.",
    "Learnt different frameworks and preprocessor such as Tailwind CSS and SASS respectively.",
    "I also bacame a React + Typescript developer building different functioning and responsive websites."
  ]
}, {
  period: "February 2025 - August 2025",
  role: "Frontend Developer",
  company_skill: "FRIN | Software Development",
  thingsLearnt: [
    "Completed my internship, gaining a strong foundation in Frontend Development, including brief knowledge about Backend Development.",
    "Acquired practical skills in web design and server side hosting with XAMPP, including sending info and retrieving from databases.",
    "Developed responsive websites with HTML, CSS and Hypertext Preprocessor (PHP)."
  ]
},]

function VerticalTime() {
  const isMobile = useMediaQuery('(max-width: 600px)');

  return (
    <Timeline position={`${isMobile ? 'right' : 'alternate'}`} >
      {
        timelineData.map((data, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              variant="body2"
              color="var(--text-color)"
              fontSize={18}
              display={`${isMobile && 'none'}`} 
            >
              {data.period}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot sx={{bgcolor: 'var(--text-color)'}} className='hover:scale-115 transition-all'>
                {index === 0 ? (<LaptopMacIcon className='text-(--background-color )'/>) : index === 1 ? (<CodeIcon/>) : index === 2 ? (<ImportantDevicesIcon />) : (<FaTree />)}
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: `${isMobile && '5px'}` }} className={`${isMobile && 'w-[80%]'}`}>
              <Tilt className='text-left'>
                <motion.div className={`px-7 md:px-10 bg-(--text-color) py-[10px] md:py-[20px] rounded-2xl text-(--background-color)`}
                  initial={{opacity: 0, y: 50}}
                  whileInView={{opacity: 1, y: 0}}
                  transition={{duration: 1.5}}
                >
                  <div>
                    <Typography variant="h5" component="span">{data.role}</Typography>
                    <Typography color='#e6e49f'>{data.company_skill}</Typography>
                  </div>

                  <div>
                    {
                      data.thingsLearnt.map((list, index) => (
                        <ul className='list-disc max-sm:text-[12px]' key={index}>
                          <li>{list}</li>              
                        </ul>
                      ))
                    }
                  </div>
                </motion.div>
              </Tilt>
            </TimelineContent>
          </TimelineItem>
        ))
      }
    </Timeline>
  );
}

export default VerticalTime