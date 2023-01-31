import { state } from '@angular/animations';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Hero } from '../models/hero.model';
import * as actions from './actions';
export const featureName = 'Heros';

export const HeroAdapter = createEntityAdapter<Hero>({});

export interface HeroState extends EntityState<Hero> {
  heroesResults?: Hero[];
}

export const initialState: HeroState = {
  ...HeroAdapter.getInitialState(),
  heroesResults: undefined,
};

export const heroReducer = createReducer(
  initialState,
  on(
    actions.loadHero,
    actions.loadHeroes,
    actions.queryHeroes,
    actions.addHero,
    (state): HeroState => ({ ...state })
  ),
  on(
    actions.loadHeroSuccess,
    (state, { hero }): HeroState =>
      HeroAdapter.setOne(hero, {
        ...state,
      })
  ),
  on(
    actions.loadHeroesSuccess,
    (state, { heroes }): HeroState =>
      HeroAdapter.setAll(heroes, {
        ...state,
      })
  ),
  on(
    actions.addHeroSuccess,
    (state, { hero }): HeroState => HeroAdapter.addOne(hero, { ...state })
  ),
  on(
    actions.updateHeroSuccess,
    (state, { hero }): HeroState => HeroAdapter.upsertOne(hero, { ...state })
  ),
  on(
    actions.queryHeroesSuccess,
    (state, { heroes }): HeroState => ({
      ...state,
      heroesResults: heroes,
    })
  ),
  on(
    actions.deleteHeroSuccess,
    (state, { hero }): HeroState =>
      HeroAdapter.removeOne(hero.id ?? '', { ...state })
  )
);
