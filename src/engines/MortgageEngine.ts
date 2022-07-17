import { getValidVariants } from "./decisionEngine"
import { FilterEngine, RankingEngine } from "./rankingEngine"
import { ApplicationType, FilterType, rankingAttributeType } from "./programs/types";
import { EngineOutputType } from "./types";

export function MortgageEngin(application: ApplicationType, filter: FilterType, rankingAttributeList: rankingAttributeType[]| undefined): EngineOutputType {
    
        const results = getValidVariants(application, filter);

        const filteredResults = FilterEngine(results, rankingAttributeList);
        const rankingResults = RankingEngine(filteredResults, rankingAttributeList);

        return {
            rankedResults: rankingResults.rankedResults.map(result => result.variant),
            metrics: rankingResults.metrics,
        };

}