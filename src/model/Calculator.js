import { LOTTO_PRIZE_LIST } from '../Constants.js';
import LottoGame from './LottoGame.js';
import Lotto from './Lotto.js';

class Calculator {
  /** @type {LottoGame} */
  #game;

  /** @type {Lotto[]} */
  #lottoList;

  /** @type {number[]} */
  #winningCountList;

  /**
   * @param {LottoGame} game
   * @param {Lotto[]} lottoList
   */
  constructor(game, lottoList) {
    this.#game = game;
    this.#lottoList = lottoList;
    this.#init();
  }

  #init() {
    const rankList = this.#computeRankList();

    this.#winningCountList = LOTTO_PRIZE_LIST.map((_, i) => {
      return rankList.filter((rank) => rank === i).length;
    });
  }

  #computeRankList() {
    return this.#lottoList.map((lotto) => this.#game.rankFinder(lotto));
  }
}

export default Calculator;
