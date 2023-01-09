import fetchJsonData from '../../shared/helpers/fetchJsonData';

/**
 * Gets list of runs from Raider.io
 * 
 * @param {string} season   Season to pull runs from (Default = season-df-1)
 * @param {string} region   Region to pull runs from (Default = world)
 * @param {string} dungeon  Dungeon to pull runs from (Default = all)
 * @param {string} affixes  Affixes to pull runs from (Default = all) Individual or Muliple affixes (Affix1-Affix2-Affix3-Affix4) are supported
 * @param {string} page     Which page to pull runs from (Default = 0)
 * 
 */
export default function getRuns(season="season-df-1", region="world", dungeon="all", affixes="all", page=0) {
    return fetchJsonData('https://raider.io/api/v1/mythic-plus/runs')
}