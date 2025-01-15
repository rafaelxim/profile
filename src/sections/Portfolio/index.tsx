import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useState } from 'react';

import Badge from '../../components/Badge';
import Title from '../../components/Title';
import PortfolioData from './portfolio.json';
import * as S from './styles';

type NavItemProps = 'all' | 'landing' | 'corporativo' | 'outros';

const Portfolio = () => {
  const [nav, setNav] = useState<NavItemProps>('all');

  const PortfolioImg = ({ imageName }: { imageName: string }) => {
    const imageUrl = new URL(`../../assets/portfolio/${imageName}`, import.meta.url).href;

    return <S.ProjectImage src={imageUrl} alt="Portfolio Item" />;
  };

  const filterByCategory = (category: string) => {
    if (nav === 'all') {
      return true;
    }

    if (category === nav) {
      return true;
    }

    return false;
  };

  return (
    <S.Wrapper id="portfolio">
      <S.Content>
        <S.Heading>
          <Badge>Portfólio</Badge>
          <Title>Veja exemplos de templates</Title>
        </S.Heading>
        <S.Gallery>
          <S.Nav>
            <S.NavItem selected={nav === 'all'} onClick={() => setNav('all')}>
              Todos
            </S.NavItem>
            <S.NavItem
              selected={nav === 'corporativo'}
              onClick={() => setNav('corporativo')}
            >
              Corporativo
            </S.NavItem>
            <S.NavItem selected={nav === 'landing'} onClick={() => setNav('landing')}>
              Landing
            </S.NavItem>
            <S.NavItem selected={nav === 'outros'} onClick={() => setNav('outros')}>
              Outros
            </S.NavItem>
          </S.Nav>
          <S.GalleryContainer>
            {PortfolioData.filter((p) => filterByCategory(p.category)).map((p) => {
              return (
                <S.ProjectBox key={p.id}>
                  <PortfolioImg imageName={p.image} />
                  <S.Overlay onClick={() => window.open(p.link, '_blank')}>
                    <OpenInNewIcon />
                    <S.ProjectTitle>{p.title}</S.ProjectTitle>
                    <S.Description>{p.subtitle}</S.Description>
                  </S.Overlay>
                </S.ProjectBox>
              );
            })}
          </S.GalleryContainer>
        </S.Gallery>
      </S.Content>
    </S.Wrapper>
  );
};

export default Portfolio;
