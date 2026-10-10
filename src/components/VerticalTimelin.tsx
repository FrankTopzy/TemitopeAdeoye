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
import Tilt from 'react-parallax-tilt';
import { FaTree } from 'react-icons/fa6';
import { motion } from 'framer-motion';

type TimelineDataType = {
  period: string;
  role: string;
  company_skill: string;
  thingsLearnt: string[];
}

const timelineData: TimelineDataType[] = [
  {
    period: "January 2022 - January 2023",
    role: "Graphics Designer",
    company_skill: "Canva | Graphics Design",
    thingsLearnt: [
      "Acquired hands-on knowledge of Graphics Design, delving into the design world.",
      "Also gaining a solid foundation in UI/UX design."
    ]
  },
  {
    period: "April 2023 - June 2026",
    role: "Computer Science",
    company_skill: "FUNAAB | CSC",
    thingsLearnt: [
      "Started my BSC program with the aim of becoming an exceptional Computer Scientist.",
      "Learnt the basics of Data Structures and Algorithm.",
      "I was introduced to some languages such as Python, C, C++, Java and PHP."
    ]
  },
  {
    period: "May 2024 - December 2025",
    role: "Frontend Developer",
    company_skill: "SuperSimpleDev and Co. | Software Engineering",
    thingsLearnt: [
      "Learnt the basics of Web development.",
      "Learnt different frameworks and preprocessors such as Tailwind CSS and SASS.",
      "Became a React + TypeScript developer building high performance, responsive websites."
    ]
  },
  {
    period: "February 2025 - August 2025",
    role: "Frontend Developer",
    company_skill: "FRIN | Software Development",
    thingsLearnt: [
      "Completed internship, gaining a strong foundation in Frontend Development & fullstack fundamentals.",
      "Acquired practical skills in web design and server side hosting with XAMPP & database integrations.",
      "Developed responsive websites with modern web technologies."
    ]
  },
];

function VerticalTime() {
  const isMobile = useMediaQuery('(max-width: 600px)');

  return (
    <Timeline position={isMobile ? 'right' : 'alternate'}>
      {timelineData.map((data, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="var(--text-color)"
            fontSize={16}
            fontWeight={600}
            display={isMobile ? 'none' : 'block'}
          >
            {data.period}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'var(--border-color)' }} />
            <TimelineDot 
              sx={{ 
                bgcolor: 'var(--card-bg)', 
                borderColor: 'var(--text-color-2)',
                color: 'var(--text-color-2)',
                boxShadow: '0 0 10px rgba(230, 228, 159, 0.2)' 
              }} 
              className='hover:scale-110 transition-all border-2'
            >
              {index === 0 ? (<LaptopMacIcon />) : index === 1 ? (<CodeIcon/>) : index === 2 ? (<ImportantDevicesIcon />) : (<FaTree />)}
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'var(--border-color)' }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: isMobile ? '5px' : '16px' }} className={isMobile ? 'w-[85%]' : ''}>
            <Tilt className='text-left'>
              <motion.div 
                className="px-6 md:px-8 py-5 md:py-6 rounded-2xl bg-[var(--card-bg)] text-[var(--text-color)] border border-[var(--border-color)] shadow-xl hover:border-[#E6E49F]/40 transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div>
                  <Typography variant="h6" component="div" sx={{ color: 'var(--text-color)', fontWeight: 700 }}>
                    {data.role}
                  </Typography>
                  <Typography sx={{ color: 'var(--text-color-2)', fontWeight: 600, fontSize: '0.9rem', mb: 1.5 }}>
                    {data.company_skill}
                  </Typography>
                </div>

                <div>
                  <ul className='list-disc pl-4 space-y-1.5 text-xs md:text-sm opacity-90'>
                    {data.thingsLearnt.map((list, listIndex) => (
                      <li key={listIndex}>{list}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </Tilt>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}

export default VerticalTime;