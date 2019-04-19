import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { List } from 'immutable';
import { IAppState } from '~/reducers/app-reducer';
import AdventureRecord from './data/AdventureRecord';
import IntlMessage from '~/components/views/IntlMessage/IntlMessage';
import StaticBackground from '~/components/views/StaticBackground/StaticBackground';
import SectionContainer from '~/components/views/SectionContainer/SectionContainer';
import { getAdventures } from './actions';
import style from './AdventuresContainer.module.scss';

interface IAdventuresContainer {
  getAdventures: typeof getAdventures;
  adventureList: List<AdventureRecord>
}

const AdventuresContainer: React.FC<IAdventuresContainer> = props => {
  useEffect(() => {
    props.getAdventures();
  }, []);

  return (
    <section className={style.AdventuresContainer}>
      <StaticBackground src="/images/adventures/adventure1.jpg" height="400px">
        <h1>
          <IntlMessage message="adventures.adventures.header" />
        </h1>
      </StaticBackground>

      <SectionContainer>
        Adventures :D :D
        <div style={{ height: '3000px' }} />
      </SectionContainer>
    </section>
  );
};

const mapStateToProps = ({ adventures }: IAppState) => {
  const { isLoading, adventureList } = adventures;

  return { isLoading, adventureList };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getAdventures }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AdventuresContainer);
