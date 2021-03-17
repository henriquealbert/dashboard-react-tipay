import { Flex, Img, Text } from '@chakra-ui/react';

export default function SocialLinks() {
  const socialLinks = [
    {
      title: '/app.tipay',
      icon: '/images/facebook.svg',
      alt: 'Facebook',
      url: 'https://www.facebook.com/app.tipay'
    },
    {
      title: '/tipay.app',
      icon: '/images/instagram.svg',
      alt: 'Instagram',
      url: 'https://www.instagram.com/tipay.app'
    },
    {
      title: '(41) 99645-0199',
      icon: '/images/tel.svg',
      alt: 'Telefone'
    },
    {
      title: 'atendimento@tipay.app',
      icon: '/images/email.svg',
      alt: 'Email'
    }
  ];
  return (
    <>
      {socialLinks.map((item, index) => (
        <Flex
          alignItems="center"
          key={index}
          my="2rem"
          mr="2rem"
          as="a"
          href={item?.url}
          target="_blank"
          rel="noreferrer"
        >
          <Img src={item.icon} alt={item.alt} mr="1rem" />
          <Text fontSize="1rem" wordBreak="keep-all">
            {item.title}
          </Text>
        </Flex>
      ))}
    </>
  );
}
