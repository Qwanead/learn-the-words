import HeaderBlock from './components/header-block/header-block';
import Header from './components/header/header';
import Paragraph from './components/paragraph/paragraph';
import ReactLogo from './logo.png';
import WORDS_LIST from './wordsList';
import Card from './components/card/card';

const App = () => (
  <>
    <HeaderBlock>
      <Header>Учите слова онлайн</Header>
      <img src={ ReactLogo } alt="Логотип" />
      <Paragraph>
        Воспользуйтесь карточками для запоминания
        и пополнения активныйх словарных запасов
      </Paragraph>
    </HeaderBlock>
    <div>
      {
        WORDS_LIST.map(({ eng, rus }, index) => (
          <Card eng = {eng} rus = {rus} key= {index} />
        ))
      }
    </div>
  </>
);

export default App;
