import { TournamentRepositoryPort } from '../../../app/ports/tournamentRepository';
import axios from 'axios';
import { MongoItemRepository } from './mongoItemRepository';
import { TeamService } from '../../../app/services/teamService';

const itemRepository = new MongoItemRepository();
const teamService = new TeamService(itemRepository);

const teste: any = {
	"status": "success",
	"response": {
		"events": [
			{
				"tournament": {
					"name": "LaLiga",
					"slug": "laliga",
					"category": {
						"name": "Spain",
						"slug": "spain",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 32,
						"country": {
							"alpha2": "ES",
							"alpha3": "ESP",
							"name": "Spain"
						},
						"flag": "spain",
						"alpha2": "ES"
					},
					"uniqueTournament": {
						"name": "LaLiga",
						"slug": "laliga",
						"category": {
							"name": "Spain",
							"slug": "spain",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 32,
							"country": {
								"alpha2": "ES",
								"alpha3": "ESP",
								"name": "Spain"
							},
							"flag": "spain",
							"alpha2": "ES"
						},
						"userCount": 1275537,
						"id": 8,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 610,
					"id": 36
				},
				"season": {
					"name": "LaLiga 24/25",
					"year": "24/25",
					"editor": false,
					"id": 61643
				},
				"roundInfo": {
					"round": 7
				},
				"customId": "GgbsIgb",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "Sevilla",
					"slug": "sevilla",
					"shortName": "Sevilla",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 648607,
					"nameCode": "SEV",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 2833,
					"country": {
						"alpha2": "ES",
						"alpha3": "ESP",
						"name": "Spain"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "اشبيلية",
							"ru": "Cевилья"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Real Valladolid",
					"slug": "real-valladolid",
					"shortName": "Real Valladolid",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 107073,
					"nameCode": "VLL",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 2831,
					"country": {
						"alpha2": "ES",
						"alpha3": "ESP",
						"name": "Spain"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "ريال بلد الوليد",
							"ru": "Реал Вальядолид"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 2,
					"display": 2,
					"period1": 1,
					"period2": 1,
					"normaltime": 2
				},
				"awayScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"time": {
					"injuryTime1": 4,
					"injuryTime2": 7,
					"currentPeriodStartTimestamp": 1727201092
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727204227
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12437766,
				"homeRedCards": 1,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727197200,
				"slug": "sevilla-real-valladolid",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "LaLiga",
					"slug": "laliga",
					"category": {
						"name": "Spain",
						"slug": "spain",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 32,
						"country": {
							"alpha2": "ES",
							"alpha3": "ESP",
							"name": "Spain"
						},
						"flag": "spain",
						"alpha2": "ES"
					},
					"uniqueTournament": {
						"name": "LaLiga",
						"slug": "laliga",
						"category": {
							"name": "Spain",
							"slug": "spain",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 32,
							"country": {
								"alpha2": "ES",
								"alpha3": "ESP",
								"name": "Spain"
							},
							"flag": "spain",
							"alpha2": "ES"
						},
						"userCount": 1275537,
						"id": 8,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 610,
					"id": 36
				},
				"season": {
					"name": "LaLiga 24/25",
					"year": "24/25",
					"editor": false,
					"id": 61643
				},
				"roundInfo": {
					"round": 7
				},
				"customId": "vgbsDgb",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 3,
				"homeTeam": {
					"name": "Valencia",
					"slug": "valencia",
					"shortName": "Valencia",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 353918,
					"nameCode": "VCF",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 2828,
					"country": {
						"alpha2": "ES",
						"alpha3": "ESP",
						"name": "Spain"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "فالنسيا",
							"ru": "Валенсия"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Osasuna",
					"slug": "osasuna",
					"shortName": "Osasuna",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 204492,
					"nameCode": "OSA",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 2820,
					"country": {
						"alpha2": "ES",
						"alpha3": "ESP",
						"name": "Spain"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "اوساسونا",
							"ru": "Осасуна"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"injuryTime1": 2,
					"injuryTime2": 3,
					"currentPeriodStartTimestamp": 1727201137
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727204052
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12437779,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727197200,
				"slug": "valencia-osasuna",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "LaLiga",
					"slug": "laliga",
					"category": {
						"name": "Spain",
						"slug": "spain",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 32,
						"country": {
							"alpha2": "ES",
							"alpha3": "ESP",
							"name": "Spain"
						},
						"flag": "spain",
						"alpha2": "ES"
					},
					"uniqueTournament": {
						"name": "LaLiga",
						"slug": "laliga",
						"category": {
							"name": "Spain",
							"slug": "spain",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 32,
							"country": {
								"alpha2": "ES",
								"alpha3": "ESP",
								"name": "Spain"
							},
							"flag": "spain",
							"alpha2": "ES"
						},
						"userCount": 1275537,
						"id": 8,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 610,
					"id": 36
				},
				"season": {
					"name": "LaLiga 24/25",
					"year": "24/25",
					"editor": false,
					"id": 61643
				},
				"roundInfo": {
					"round": 7
				},
				"customId": "EgbsKhb",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "Real Madrid",
					"slug": "real-madrid",
					"shortName": "Real Madrid",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 4294168,
					"nameCode": "RMA",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 2829,
					"country": {
						"alpha2": "ES",
						"alpha3": "ESP",
						"name": "Spain"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "ريال مدريد",
							"ru": "Реал Мадрид"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Deportivo Alavés",
					"slug": "deportivo-alaves",
					"shortName": "Alavés",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 147936,
					"nameCode": "ALA",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 2885,
					"country": {
						"alpha2": "ES",
						"alpha3": "ESP",
						"name": "Spain"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "ديبورتيفو ألافيس",
							"ru": "Алавес"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 3,
					"display": 3,
					"period1": 2,
					"period2": 1,
					"normaltime": 3
				},
				"awayScore": {
					"current": 2,
					"display": 2,
					"period1": 0,
					"period2": 2,
					"normaltime": 2
				},
				"time": {
					"injuryTime1": 2,
					"injuryTime2": 6,
					"currentPeriodStartTimestamp": 1727208335
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727211437
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12437782,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727204400,
				"slug": "deportivo-alaves-real-madrid",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "LaLiga",
					"slug": "laliga",
					"category": {
						"name": "Spain",
						"slug": "spain",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 32,
						"country": {
							"alpha2": "ES",
							"alpha3": "ESP",
							"name": "Spain"
						},
						"flag": "spain",
						"alpha2": "ES"
					},
					"uniqueTournament": {
						"name": "LaLiga",
						"slug": "laliga",
						"category": {
							"name": "Spain",
							"slug": "spain",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 32,
							"country": {
								"alpha2": "ES",
								"alpha3": "ESP",
								"name": "Spain"
							},
							"flag": "spain",
							"alpha2": "ES"
						},
						"userCount": 1275537,
						"id": 8,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 610,
					"id": 36
				},
				"season": {
					"name": "LaLiga 24/25",
					"year": "24/25",
					"editor": false,
					"id": 61643
				},
				"roundInfo": {
					"round": 7
				},
				"customId": "tgbsoKj",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 3,
				"homeTeam": {
					"name": "Girona FC",
					"slug": "girona-fc",
					"shortName": "Girona",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 546645,
					"nameCode": "GIR",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 24264,
					"country": {
						"alpha2": "ES",
						"alpha3": "ESP",
						"name": "Spain"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "جيرونا",
							"ru": "Жирона"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Rayo Vallecano",
					"slug": "rayo-vallecano",
					"shortName": "Rayo Vallecano",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 193183,
					"nameCode": "RVM",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 2818,
					"country": {
						"alpha2": "ES",
						"alpha3": "ESP",
						"name": "Spain"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "رايو فاليكانو",
							"ru": "Райо Вальекано"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"injuryTime1": 3,
					"injuryTime2": 5,
					"currentPeriodStartTimestamp": 1727287588
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727290625
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12437761,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727283600,
				"slug": "girona-fc-rayo-vallecano",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "LaLiga",
					"slug": "laliga",
					"category": {
						"name": "Spain",
						"slug": "spain",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 32,
						"country": {
							"alpha2": "ES",
							"alpha3": "ESP",
							"name": "Spain"
						},
						"flag": "spain",
						"alpha2": "ES"
					},
					"uniqueTournament": {
						"name": "LaLiga",
						"slug": "laliga",
						"category": {
							"name": "Spain",
							"slug": "spain",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 32,
							"country": {
								"alpha2": "ES",
								"alpha3": "ESP",
								"name": "Spain"
							},
							"flag": "spain",
							"alpha2": "ES"
						},
						"userCount": 1275537,
						"id": 8,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 610,
					"id": 36
				},
				"season": {
					"name": "LaLiga 24/25",
					"year": "24/25",
					"editor": false,
					"id": 61643
				},
				"roundInfo": {
					"round": 7
				},
				"customId": "rgbsjhb",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "Barcelona",
					"slug": "barcelona",
					"shortName": "Barcelona",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 3464252,
					"nameCode": "FCB",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 2817,
					"country": {
						"alpha2": "ES",
						"alpha3": "ESP",
						"name": "Spain"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "برشلونة",
							"ru": "Барселона"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Getafe",
					"slug": "getafe",
					"shortName": "Getafe",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 197834,
					"nameCode": "GET",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 2859,
					"country": {
						"alpha2": "ES",
						"alpha3": "ESP",
						"name": "Spain"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "خيتافي CF",
							"ru": "Хетафе"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 1,
					"display": 1,
					"period1": 1,
					"period2": 0,
					"normaltime": 1
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"injuryTime1": 1,
					"injuryTime2": 5,
					"currentPeriodStartTimestamp": 1727294644
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727297651
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12437758,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727290800,
				"slug": "getafe-barcelona",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Serie A",
					"slug": "serie-a",
					"category": {
						"name": "Italy",
						"slug": "italy",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 31,
						"country": {
							"alpha2": "IT",
							"alpha3": "ITA",
							"name": "Italy"
						},
						"flag": "italy",
						"alpha2": "IT"
					},
					"uniqueTournament": {
						"name": "Serie A",
						"slug": "serie-a",
						"primaryColorHex": "#09519e",
						"secondaryColorHex": "#008fd7",
						"category": {
							"name": "Italy",
							"slug": "italy",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 31,
							"country": {
								"alpha2": "IT",
								"alpha3": "ITA",
								"name": "Italy"
							},
							"flag": "italy",
							"alpha2": "IT"
						},
						"userCount": 1006221,
						"id": 23,
						"country": {},
						"crowdsourcingEnabled": false,
						"hasPerformanceGraphFeature": true,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 609,
					"id": 33
				},
				"season": {
					"name": "Serie A 24/25",
					"year": "24/25",
					"editor": false,
					"id": 63515
				},
				"roundInfo": {
					"round": 5
				},
				"customId": "Ldbseeb",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "Atalanta",
					"slug": "atalanta",
					"shortName": "Atalanta",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 675725,
					"nameCode": "ATA",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 2686,
					"country": {
						"alpha2": "IT",
						"alpha3": "ITA",
						"name": "Italy"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "أتلانتا بيرغامو",
							"ru": "Аталанта"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Como",
					"slug": "como",
					"shortName": "Como",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 47541,
					"nameCode": "COM",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 2704,
					"country": {
						"alpha2": "IT",
						"alpha3": "ITA",
						"name": "Italy"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "كومو 1907"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 2,
					"display": 2,
					"period1": 1,
					"period2": 1,
					"normaltime": 2
				},
				"awayScore": {
					"current": 3,
					"display": 3,
					"period1": 0,
					"period2": 3,
					"normaltime": 3
				},
				"time": {
					"injuryTime1": 0,
					"injuryTime2": 6,
					"currentPeriodStartTimestamp": 1727207299
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime"
					],
					"changeTimestamp": 1727210512
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12499295,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727203500,
				"slug": "como-atalanta",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Copa Libertadores, Knockout stage",
					"slug": "conmebol-libertadores",
					"category": {
						"name": "South America",
						"slug": "south-america",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 1470,
						"country": {},
						"flag": "south-america"
					},
					"uniqueTournament": {
						"name": "CONMEBOL Libertadores",
						"slug": "conmebol-libertadores",
						"category": {
							"name": "South America",
							"slug": "south-america",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 1470,
							"country": {},
							"flag": "south-america"
						},
						"userCount": 302172,
						"id": 384,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 605,
					"isGroup": false,
					"isLive": false,
					"id": 309
				},
				"season": {
					"name": "Copa Libertadores 2024",
					"year": "2024",
					"editor": false,
					"id": 57296
				},
				"roundInfo": {
					"round": 27,
					"name": "Quarterfinals",
					"cupRoundType": 4
				},
				"customId": "fnbslob",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"aggregatedWinnerCode": 1,
				"homeTeam": {
					"name": "River Plate",
					"slug": "river-plate",
					"shortName": "River",
					"gender": "M",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 255254,
					"nameCode": "RIV",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 3211,
					"country": {
						"alpha2": "AR",
						"alpha3": "ARG",
						"name": "Argentina"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#ffffff",
						"secondary": "#ff0000",
						"text": "#ff0000"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Ривер Плейт"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Colo Colo",
					"slug": "colo-colo",
					"shortName": "Colo-Colo",
					"gender": "M",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 78727,
					"nameCode": "CC",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 3155,
					"country": {
						"alpha2": "CL",
						"alpha3": "CHL",
						"name": "Chile"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#ffffff",
						"secondary": "#ffffff",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Коло Коло"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 1,
					"display": 1,
					"period1": 1,
					"period2": 0,
					"normaltime": 1,
					"aggregated": 2
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0,
					"aggregated": 1
				},
				"time": {
					"injuryTime1": 2,
					"injuryTime2": 5,
					"currentPeriodStartTimestamp": 1727228035
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727231069
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12375374,
				"crowdsourcingEnabled": false,
				"previousLegEventId": 12375388,
				"startTimestamp": 1727224200,
				"slug": "river-plate-colo-colo",
				"finalResultOnly": false,
				"feedLocked": true,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Copa Libertadores, Knockout stage",
					"slug": "conmebol-libertadores",
					"category": {
						"name": "South America",
						"slug": "south-america",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 1470,
						"country": {},
						"flag": "south-america"
					},
					"uniqueTournament": {
						"name": "CONMEBOL Libertadores",
						"slug": "conmebol-libertadores",
						"category": {
							"name": "South America",
							"slug": "south-america",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 1470,
							"country": {},
							"flag": "south-america"
						},
						"userCount": 302172,
						"id": 384,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 605,
					"isGroup": false,
					"isLive": false,
					"id": 309
				},
				"season": {
					"name": "Copa Libertadores 2024",
					"year": "2024",
					"editor": false,
					"id": 57296
				},
				"roundInfo": {
					"round": 27,
					"name": "Quarterfinals",
					"cupRoundType": 4
				},
				"customId": "lOsCO",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"aggregatedWinnerCode": 1,
				"homeTeam": {
					"name": "Atlético Mineiro",
					"slug": "atletico-mineiro",
					"shortName": "Atlético-MG",
					"gender": "M",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 284436,
					"nameCode": "ATL",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 1977,
					"country": {
						"alpha2": "BR",
						"alpha3": "BRA",
						"name": "Brazil"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#000000",
						"secondary": "#ffffff",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Атлетико Минейро"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Fluminense",
					"slug": "fluminense",
					"shortName": "Fluminense",
					"gender": "M",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 319134,
					"nameCode": "FLU",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 1961,
					"country": {
						"alpha2": "BR",
						"alpha3": "BRA",
						"name": "Brazil"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#660000",
						"secondary": "#006633",
						"text": "#006633"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Флуминенсе"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 2,
					"display": 2,
					"period1": 0,
					"period2": 2,
					"normaltime": 2,
					"aggregated": 2
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0,
					"aggregated": 1
				},
				"time": {
					"injuryTime1": 2,
					"injuryTime2": 5,
					"currentPeriodStartTimestamp": 1727305361
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727308579
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12375387,
				"crowdsourcingEnabled": false,
				"previousLegEventId": 12375373,
				"startTimestamp": 1727301600,
				"slug": "atletico-mineiro-fluminense",
				"finalResultOnly": false,
				"feedLocked": true,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Copa Libertadores, Knockout stage",
					"slug": "conmebol-libertadores",
					"category": {
						"name": "South America",
						"slug": "south-america",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 1470,
						"country": {},
						"flag": "south-america"
					},
					"uniqueTournament": {
						"name": "CONMEBOL Libertadores",
						"slug": "conmebol-libertadores",
						"category": {
							"name": "South America",
							"slug": "south-america",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 1470,
							"country": {},
							"flag": "south-america"
						},
						"userCount": 302172,
						"id": 384,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 605,
					"isGroup": false,
					"isLive": false,
					"id": 309
				},
				"season": {
					"name": "Copa Libertadores 2024",
					"year": "2024",
					"editor": false,
					"id": 57296
				},
				"roundInfo": {
					"round": 27,
					"name": "Quarterfinals",
					"cupRoundType": 4
				},
				"customId": "iOsGO",
				"status": {
					"code": 6,
					"description": "1st half",
					"type": "inprogress"
				},
				"aggregatedWinnerCode": 3,
				"homeTeam": {
					"name": "São Paulo",
					"slug": "sao-paulo",
					"shortName": "São Paulo",
					"gender": "M",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 451544,
					"nameCode": "SPA",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 1981,
					"country": {
						"alpha2": "BR",
						"alpha3": "BRA",
						"name": "Brazil"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#ffffff",
						"secondary": "#000000",
						"text": "#000000"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "ФК Сан-Паулу"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Botafogo",
					"slug": "botafogo",
					"shortName": "Botafogo",
					"gender": "M",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 278417,
					"nameCode": "BOT",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 1958,
					"country": {
						"alpha2": "BR",
						"alpha3": "BRA",
						"name": "Brazil"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#000000",
						"secondary": "#ffffff",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "ФК Ботафого"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"normaltime": 0,
					"aggregated": 0
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"normaltime": 0,
					"aggregated": 0
				},
				"time": {
					"initial": 0,
					"max": 2700,
					"extra": 540,
					"currentPeriodStartTimestamp": 1727310713
				},
				"changes": {
					"changes": [
						"homeScore.period1",
						"homeScore.normaltime",
						"awayScore.period1",
						"awayScore.normaltime"
					],
					"changeTimestamp": 1727310796
				},
				"hasGlobalHighlights": false,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12375389,
				"statusTime": {
					"prefix": "",
					"initial": 0,
					"max": 2700,
					"timestamp": 1727310713,
					"extra": 540
				},
				"crowdsourcingEnabled": false,
				"previousLegEventId": 12375369,
				"startTimestamp": 1727310600,
				"slug": "sao-paulo-botafogo",
				"lastPeriod": "period1",
				"finalResultOnly": false,
				"feedLocked": true,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Copa Sudamericana, Knockout stage",
					"slug": "conmebol-sudamericana",
					"category": {
						"name": "South America",
						"slug": "south-america",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 1470,
						"country": {},
						"flag": "south-america"
					},
					"uniqueTournament": {
						"name": "CONMEBOL Sudamericana",
						"slug": "conmebol-sudamericana",
						"category": {
							"name": "South America",
							"slug": "south-america",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 1470,
							"country": {},
							"flag": "south-america"
						},
						"userCount": 172994,
						"id": 480,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 458,
					"isGroup": false,
					"isLive": false,
					"id": 91444
				},
				"season": {
					"name": "Copa Sudamericana 2024",
					"year": "2024",
					"editor": false,
					"id": 57297
				},
				"roundInfo": {
					"round": 27,
					"name": "Quarterfinals",
					"cupRoundType": 4
				},
				"customId": "hOsvP",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"aggregatedWinnerCode": 1,
				"homeTeam": {
					"name": "Corinthians",
					"slug": "corinthians",
					"shortName": "Corinthians",
					"gender": "M",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 501092,
					"nameCode": "COR",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 1957,
					"country": {
						"alpha2": "BR",
						"alpha3": "BRA",
						"name": "Brazil"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#ffffff",
						"secondary": "#000000",
						"text": "#000000"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Коринтианс"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Fortaleza",
					"slug": "fortaleza",
					"shortName": "Fortaleza",
					"gender": "M",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 199814,
					"nameCode": "FOR",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 2020,
					"country": {
						"alpha2": "BR",
						"alpha3": "BRA",
						"name": "Brazil"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#0000ff",
						"secondary": "#ff0000",
						"text": "#ff0000"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Форталеза"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 3,
					"display": 3,
					"period1": 0,
					"period2": 3,
					"normaltime": 3,
					"aggregated": 5
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0,
					"aggregated": 0
				},
				"time": {
					"injuryTime1": 2,
					"injuryTime2": 2,
					"currentPeriodStartTimestamp": 1727228066
				},
				"changes": {
					"changes": [
						"time.injuryTime2",
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727230870
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12378088,
				"crowdsourcingEnabled": false,
				"previousLegEventId": 12378089,
				"startTimestamp": 1727224200,
				"slug": "fortaleza-corinthians",
				"finalResultOnly": false,
				"feedLocked": true,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Copa Sudamericana, Knockout stage",
					"slug": "conmebol-sudamericana",
					"category": {
						"name": "South America",
						"slug": "south-america",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 1470,
						"country": {},
						"flag": "south-america"
					},
					"uniqueTournament": {
						"name": "CONMEBOL Sudamericana",
						"slug": "conmebol-sudamericana",
						"category": {
							"name": "South America",
							"slug": "south-america",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 1470,
							"country": {},
							"flag": "south-america"
						},
						"userCount": 172994,
						"id": 480,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 458,
					"isGroup": false,
					"isLive": false,
					"id": 91444
				},
				"season": {
					"name": "Copa Sudamericana 2024",
					"year": "2024",
					"editor": false,
					"id": 57297
				},
				"roundInfo": {
					"round": 27,
					"name": "Quarterfinals",
					"cupRoundType": 4
				},
				"customId": "tobspxc",
				"status": {
					"code": 6,
					"description": "1st half",
					"type": "inprogress"
				},
				"aggregatedWinnerCode": 3,
				"homeTeam": {
					"name": "Independiente Medellín",
					"slug": "independiente-medellin",
					"shortName": "Ind. Medellín",
					"gender": "M",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 29880,
					"nameCode": "DIM",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 6115,
					"country": {
						"alpha2": "CO",
						"alpha3": "COL",
						"name": "Colombia"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#ffffff",
						"secondary": "#000000",
						"text": "#000000"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Индепенденте Меделлин"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Lanús",
					"slug": "lanus",
					"shortName": "Lanús",
					"gender": "M",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 24621,
					"nameCode": "LAN",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 3218,
					"country": {
						"alpha2": "AR",
						"alpha3": "ARG",
						"name": "Argentina"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#660033",
						"secondary": "#ffffff",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Атлетико Ланус"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"normaltime": 0,
					"aggregated": 0
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"normaltime": 0,
					"aggregated": 0
				},
				"time": {
					"initial": 0,
					"max": 2700,
					"extra": 540,
					"currentPeriodStartTimestamp": 1727310618
				},
				"changes": {
					"changes": [
						"homeScore.period1",
						"homeScore.normaltime",
						"awayScore.period1",
						"awayScore.normaltime"
					],
					"changeTimestamp": 1727310739
				},
				"hasGlobalHighlights": false,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12378095,
				"statusTime": {
					"prefix": "",
					"initial": 0,
					"max": 2700,
					"timestamp": 1727310618,
					"extra": 540
				},
				"crowdsourcingEnabled": false,
				"previousLegEventId": 12378094,
				"startTimestamp": 1727310600,
				"slug": "independiente-medellin-lanus",
				"lastPeriod": "period1",
				"finalResultOnly": false,
				"feedLocked": true,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Brasileirão Série A",
					"slug": "brasileirao-serie-a",
					"category": {
						"name": "Brazil",
						"slug": "brazil",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 13,
						"country": {
							"alpha2": "BR",
							"alpha3": "BRA",
							"name": "Brazil"
						},
						"flag": "brazil",
						"alpha2": "BR"
					},
					"uniqueTournament": {
						"name": "Brasileirão Série A",
						"slug": "brasileirao-serie-a",
						"category": {
							"name": "Brazil",
							"slug": "brazil",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 13,
							"country": {
								"alpha2": "BR",
								"alpha3": "BRA",
								"name": "Brazil"
							},
							"flag": "brazil",
							"alpha2": "BR"
						},
						"userCount": 408198,
						"id": 325,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 451,
					"id": 83
				},
				"season": {
					"name": "Brasileiro Serie A 2024",
					"year": "2024",
					"editor": false,
					"id": 58766
				},
				"roundInfo": {
					"round": 5
				},
				"customId": "JOsBtc",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "Grêmio",
					"slug": "gremio",
					"shortName": "Grêmio",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 270361,
					"nameCode": "GPA",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 5926,
					"country": {
						"alpha2": "BR",
						"alpha3": "BRA",
						"name": "Brazil"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Гремио"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Criciúma",
					"slug": "criciuma",
					"shortName": "Criciúma",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 51994,
					"nameCode": "CRI",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 1984,
					"country": {
						"alpha2": "BR",
						"alpha3": "BRA",
						"name": "Brazil"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "ФК Кришиума СК"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"awayScore": {
					"current": 2,
					"display": 2,
					"period1": 1,
					"period2": 1,
					"normaltime": 2
				},
				"time": {
					"injuryTime1": 3,
					"injuryTime2": 7,
					"currentPeriodStartTimestamp": 1727305569
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727308760
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12860733,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727301600,
				"slug": "gremio-criciuma",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Brasileirão Série A",
					"slug": "brasileirao-serie-a",
					"category": {
						"name": "Brazil",
						"slug": "brazil",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 13,
						"country": {
							"alpha2": "BR",
							"alpha3": "BRA",
							"name": "Brazil"
						},
						"flag": "brazil",
						"alpha2": "BR"
					},
					"uniqueTournament": {
						"name": "Brasileirão Série A",
						"slug": "brasileirao-serie-a",
						"category": {
							"name": "Brazil",
							"slug": "brazil",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 13,
							"country": {
								"alpha2": "BR",
								"alpha3": "BRA",
								"name": "Brazil"
							},
							"flag": "brazil",
							"alpha2": "BR"
						},
						"userCount": 408198,
						"id": 325,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 451,
					"id": 83
				},
				"season": {
					"name": "Brasileiro Serie A 2024",
					"year": "2024",
					"editor": false,
					"id": 58766
				},
				"roundInfo": {
					"round": 16
				},
				"customId": "qOsZO",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 3,
				"homeTeam": {
					"name": "Red Bull Bragantino",
					"slug": "red-bull-bragantino",
					"shortName": "RB Bragantino",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 153321,
					"nameCode": "BRA",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 1999,
					"country": {
						"alpha2": "BR",
						"alpha3": "BRA",
						"name": "Brazil"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Ред Булл Брагантино"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Internacional",
					"slug": "internacional",
					"shortName": "Internacional",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 231248,
					"nameCode": "INT",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 1966,
					"country": {
						"alpha2": "BR",
						"alpha3": "BRA",
						"name": "Brazil"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Интернаcьонал"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 2,
					"display": 2,
					"period1": 1,
					"period2": 1,
					"normaltime": 2
				},
				"awayScore": {
					"current": 2,
					"display": 2,
					"period1": 1,
					"period2": 1,
					"normaltime": 2
				},
				"time": {
					"injuryTime1": 2,
					"injuryTime2": 6,
					"currentPeriodStartTimestamp": 1727305474
				},
				"changes": {
					"changes": [
						"time.injuryTime2",
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727308538
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12851651,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727301600,
				"slug": "red-bull-bragantino-internacional",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "EFL Cup",
					"slug": "efl-cup",
					"category": {
						"name": "England",
						"slug": "england",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 1,
						"country": {
							"alpha2": "EN",
							"alpha3": "ENG",
							"name": "England"
						},
						"flag": "england",
						"alpha2": "EN"
					},
					"uniqueTournament": {
						"name": "EFL Cup",
						"slug": "efl-cup",
						"category": {
							"name": "England",
							"slug": "england",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 1,
							"country": {
								"alpha2": "EN",
								"alpha3": "ENG",
								"name": "England"
							},
							"flag": "england",
							"alpha2": "EN"
						},
						"userCount": 213086,
						"crowdsourcingEnabled": false,
						"hasPerformanceGraphFeature": false,
						"id": 21,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 424,
					"id": 17
				},
				"season": {
					"name": "EFL Cup 24/25",
					"year": "24/25",
					"editor": false,
					"id": 62483
				},
				"roundInfo": {
					"round": 3,
					"name": "Round 3"
				},
				"customId": "OshEj",
				"status": {
					"code": 60,
					"description": "Postponed",
					"type": "postponed"
				},
				"homeTeam": {
					"name": "AFC Wimbledon",
					"slug": "afc-wimbledon",
					"shortName": "Wimbledon",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 11165,
					"nameCode": "WIM",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 23957,
					"country": {
						"alpha2": "EN",
						"alpha3": "ENG",
						"name": "England"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "ويمبلدون",
							"ru": "АФК Уимблдон"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Newcastle United",
					"slug": "newcastle-united",
					"shortName": "Newcastle",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 885809,
					"nameCode": "NEW",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 39,
					"country": {
						"alpha2": "EN",
						"alpha3": "ENG",
						"name": "England"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "نيوكاسل يونايتد",
							"ru": "Ньюкасл Юнайтед"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {},
				"awayScore": {},
				"time": {},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727083873
				},
				"hasGlobalHighlights": false,
				"hasEventPlayerStatistics": false,
				"hasEventPlayerHeatMap": false,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12785386,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727203500,
				"slug": "afc-wimbledon-newcastle-united",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "EFL Cup",
					"slug": "efl-cup",
					"category": {
						"name": "England",
						"slug": "england",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 1,
						"country": {
							"alpha2": "EN",
							"alpha3": "ENG",
							"name": "England"
						},
						"flag": "england",
						"alpha2": "EN"
					},
					"uniqueTournament": {
						"name": "EFL Cup",
						"slug": "efl-cup",
						"category": {
							"name": "England",
							"slug": "england",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 1,
							"country": {
								"alpha2": "EN",
								"alpha3": "ENG",
								"name": "England"
							},
							"flag": "england",
							"alpha2": "EN"
						},
						"userCount": 213086,
						"crowdsourcingEnabled": false,
						"hasPerformanceGraphFeature": false,
						"id": 21,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 424,
					"id": 17
				},
				"season": {
					"name": "EFL Cup 24/25",
					"year": "24/25",
					"editor": false,
					"id": 62483
				},
				"roundInfo": {
					"round": 3,
					"name": "Round 3"
				},
				"customId": "NsXb",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "Chelsea",
					"slug": "chelsea",
					"shortName": "Chelsea",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 2084400,
					"nameCode": "CHE",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 38,
					"country": {
						"alpha2": "EN",
						"alpha3": "ENG",
						"name": "England"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "تشيلسي",
							"ru": "Челси"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Barrow",
					"slug": "barrow",
					"shortName": "Barrow",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 10064,
					"nameCode": "BAR",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 97,
					"country": {
						"alpha2": "EN",
						"alpha3": "ENG",
						"name": "England"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Барроу"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 5,
					"display": 5,
					"period1": 3,
					"period2": 2,
					"normaltime": 5
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"injuryTime1": 1,
					"injuryTime2": 1,
					"currentPeriodStartTimestamp": 1727207292
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727210065
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12785382,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727203500,
				"slug": "barrow-chelsea",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "EFL Cup",
					"slug": "efl-cup",
					"category": {
						"name": "England",
						"slug": "england",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 1,
						"country": {
							"alpha2": "EN",
							"alpha3": "ENG",
							"name": "England"
						},
						"flag": "england",
						"alpha2": "EN"
					},
					"uniqueTournament": {
						"name": "EFL Cup",
						"slug": "efl-cup",
						"category": {
							"name": "England",
							"slug": "england",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 1,
							"country": {
								"alpha2": "EN",
								"alpha3": "ENG",
								"name": "England"
							},
							"flag": "england",
							"alpha2": "EN"
						},
						"userCount": 213086,
						"crowdsourcingEnabled": false,
						"hasPerformanceGraphFeature": false,
						"id": 21,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 424,
					"id": 17
				},
				"season": {
					"name": "EFL Cup 24/25",
					"year": "24/25",
					"editor": false,
					"id": 62483
				},
				"roundInfo": {
					"round": 3,
					"name": "Round 3"
				},
				"customId": "rz",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "Manchester City",
					"slug": "manchester-city",
					"shortName": "Man City",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 2977065,
					"nameCode": "MCI",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 17,
					"country": {
						"alpha2": "EN",
						"alpha3": "ENG",
						"name": "England"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "مانشستر سيتي",
							"ru": "Манчестер Сити"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Watford",
					"slug": "watford",
					"shortName": "Watford",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 71996,
					"nameCode": "WAT",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 24,
					"country": {
						"alpha2": "EN",
						"alpha3": "ENG",
						"name": "England"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "واتفورد",
							"ru": "Уотфорд"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 2,
					"display": 2,
					"period1": 2,
					"period2": 0,
					"normaltime": 2
				},
				"awayScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"time": {
					"injuryTime1": 1,
					"injuryTime2": 4,
					"currentPeriodStartTimestamp": 1727207236
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727210204
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12806485,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727203500,
				"slug": "watford-manchester-city",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "EFL Cup",
					"slug": "efl-cup",
					"category": {
						"name": "England",
						"slug": "england",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 1,
						"country": {
							"alpha2": "EN",
							"alpha3": "ENG",
							"name": "England"
						},
						"flag": "england",
						"alpha2": "EN"
					},
					"uniqueTournament": {
						"name": "EFL Cup",
						"slug": "efl-cup",
						"category": {
							"name": "England",
							"slug": "england",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 1,
							"country": {
								"alpha2": "EN",
								"alpha3": "ENG",
								"name": "England"
							},
							"flag": "england",
							"alpha2": "EN"
						},
						"userCount": 213086,
						"crowdsourcingEnabled": false,
						"hasPerformanceGraphFeature": false,
						"id": 21,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 424,
					"id": 17
				},
				"season": {
					"name": "EFL Cup 24/25",
					"year": "24/25",
					"editor": false,
					"id": 62483
				},
				"roundInfo": {
					"round": 3,
					"name": "Round 3"
				},
				"customId": "BsG",
				"status": {
					"code": 120,
					"description": "AP",
					"type": "finished"
				},
				"winnerCode": 3,
				"homeTeam": {
					"name": "Walsall",
					"slug": "walsall",
					"shortName": "Walsall",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 8429,
					"nameCode": "WAl",
					"national": false,
					"type": 0,
					"id": 26,
					"country": {
						"alpha2": "EN",
						"alpha3": "ENG",
						"name": "England"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "ФК Уолсолл"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Leicester City",
					"slug": "leicester-city",
					"shortName": "Leicester",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 524125,
					"nameCode": "LEI",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 31,
					"country": {
						"alpha2": "EN",
						"alpha3": "ENG",
						"name": "England"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "ليستر سيتي",
							"ru": "Лестер Сити"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0,
					"penalties": 0
				},
				"awayScore": {
					"current": 3,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0,
					"penalties": 3
				},
				"time": {
					"injuryTime1": 3,
					"injuryTime2": 5,
					"currentPeriodStartTimestamp": 1727207333
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.penalties",
						"awayScore.display",
						"awayScore.penalties"
					],
					"changeTimestamp": 1727210866
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12785378,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727203500,
				"slug": "leicester-city-walsall",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "EFL Cup",
					"slug": "efl-cup",
					"category": {
						"name": "England",
						"slug": "england",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 1,
						"country": {
							"alpha2": "EN",
							"alpha3": "ENG",
							"name": "England"
						},
						"flag": "england",
						"alpha2": "EN"
					},
					"uniqueTournament": {
						"name": "EFL Cup",
						"slug": "efl-cup",
						"category": {
							"name": "England",
							"slug": "england",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 1,
							"country": {
								"alpha2": "EN",
								"alpha3": "ENG",
								"name": "England"
							},
							"flag": "england",
							"alpha2": "EN"
						},
						"userCount": 213086,
						"crowdsourcingEnabled": false,
						"hasPerformanceGraphFeature": false,
						"id": 21,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 424,
					"id": 17
				},
				"season": {
					"name": "EFL Cup 24/25",
					"year": "24/25",
					"editor": false,
					"id": 62483
				},
				"roundInfo": {
					"round": 3,
					"name": "Round 3"
				},
				"customId": "Pmb",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "Wycombe Wanderers",
					"slug": "wycombe-wanderers",
					"shortName": "Wycombe",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 12163,
					"nameCode": "WYW",
					"national": false,
					"type": 0,
					"id": 62,
					"country": {
						"alpha2": "EN",
						"alpha3": "ENG",
						"name": "England"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "ويكمب وندررز",
							"ru": "Уикомб Уондерерс"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Aston Villa",
					"slug": "aston-villa",
					"shortName": "Aston Villa",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 757816,
					"nameCode": "AVL",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 40,
					"country": {
						"alpha2": "EN",
						"alpha3": "ENG",
						"name": "England"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "أستون فيلا",
							"ru": "Астон Вилла"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"awayScore": {
					"current": 2,
					"display": 2,
					"period1": 0,
					"period2": 2,
					"normaltime": 2
				},
				"time": {
					"injuryTime1": 1,
					"injuryTime2": 4,
					"currentPeriodStartTimestamp": 1727208154
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime"
					],
					"changeTimestamp": 1727211167
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12785413,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727204400,
				"slug": "wycombe-wanderers-aston-villa",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "EFL Cup",
					"slug": "efl-cup",
					"category": {
						"name": "England",
						"slug": "england",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 1,
						"country": {
							"alpha2": "EN",
							"alpha3": "ENG",
							"name": "England"
						},
						"flag": "england",
						"alpha2": "EN"
					},
					"uniqueTournament": {
						"name": "EFL Cup",
						"slug": "efl-cup",
						"category": {
							"name": "England",
							"slug": "england",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 1,
							"country": {
								"alpha2": "EN",
								"alpha3": "ENG",
								"name": "England"
							},
							"flag": "england",
							"alpha2": "EN"
						},
						"userCount": 213086,
						"crowdsourcingEnabled": false,
						"hasPerformanceGraphFeature": false,
						"id": 21,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 424,
					"id": 17
				},
				"season": {
					"name": "EFL Cup 24/25",
					"year": "24/25",
					"editor": false,
					"id": 62483
				},
				"roundInfo": {
					"round": 3,
					"name": "Round 3"
				},
				"customId": "fsR",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "Arsenal",
					"slug": "arsenal",
					"shortName": "Arsenal",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 2299728,
					"nameCode": "ARS",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 42,
					"country": {
						"alpha2": "EN",
						"alpha3": "ENG",
						"name": "England"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "أرسنال",
							"ru": "Арсенал"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Bolton Wanderers",
					"slug": "bolton-wanderers",
					"shortName": "Bolton",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 22887,
					"nameCode": "BOL",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 5,
					"country": {
						"alpha2": "EN",
						"alpha3": "ENG",
						"name": "England"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "بولتون وانديريرز",
							"ru": "Болтон Уондерерс"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 5,
					"display": 5,
					"period1": 2,
					"period2": 3,
					"normaltime": 5
				},
				"awayScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"time": {
					"injuryTime1": 3,
					"injuryTime2": 4,
					"currentPeriodStartTimestamp": 1727293717
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727296678
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12785412,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727289900,
				"slug": "arsenal-bolton-wanderers",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "EFL Cup",
					"slug": "efl-cup",
					"category": {
						"name": "England",
						"slug": "england",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 1,
						"country": {
							"alpha2": "EN",
							"alpha3": "ENG",
							"name": "England"
						},
						"flag": "england",
						"alpha2": "EN"
					},
					"uniqueTournament": {
						"name": "EFL Cup",
						"slug": "efl-cup",
						"category": {
							"name": "England",
							"slug": "england",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 1,
							"country": {
								"alpha2": "EN",
								"alpha3": "ENG",
								"name": "England"
							},
							"flag": "england",
							"alpha2": "EN"
						},
						"userCount": 213086,
						"crowdsourcingEnabled": false,
						"hasPerformanceGraphFeature": false,
						"id": 21,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 424,
					"id": 17
				},
				"season": {
					"name": "EFL Cup 24/25",
					"year": "24/25",
					"editor": false,
					"id": 62483
				},
				"roundInfo": {
					"round": 3,
					"name": "Round 3"
				},
				"customId": "MU",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "Liverpool",
					"slug": "liverpool",
					"shortName": "Liverpool",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 2528501,
					"nameCode": "LIV",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 44,
					"country": {
						"alpha2": "EN",
						"alpha3": "ENG",
						"name": "England"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "ليفربول",
							"ru": "Ливерпуль"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "West Ham United",
					"slug": "west-ham-united",
					"shortName": "West Ham",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 673401,
					"nameCode": "WHU",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 37,
					"country": {
						"alpha2": "EN",
						"alpha3": "ENG",
						"name": "England"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "وست هام يونايتد",
							"ru": "Вест Хэм Юнайтед"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 5,
					"display": 5,
					"period1": 1,
					"period2": 4,
					"normaltime": 5
				},
				"awayScore": {
					"current": 1,
					"display": 1,
					"period1": 1,
					"period2": 0,
					"normaltime": 1
				},
				"time": {
					"injuryTime1": 1,
					"injuryTime2": 5,
					"currentPeriodStartTimestamp": 1727294494
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime"
					],
					"changeTimestamp": 1727297508
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12785397,
				"awayRedCards": 1,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727290800,
				"slug": "liverpool-west-ham-united",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Coppa Italia",
					"slug": "coppa-italia",
					"category": {
						"name": "Italy",
						"slug": "italy",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 31,
						"country": {
							"alpha2": "IT",
							"alpha3": "ITA",
							"name": "Italy"
						},
						"flag": "italy",
						"alpha2": "IT"
					},
					"uniqueTournament": {
						"name": "Coppa Italia",
						"slug": "coppa-italia",
						"category": {
							"name": "Italy",
							"slug": "italy",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 31,
							"country": {
								"alpha2": "IT",
								"alpha3": "ITA",
								"name": "Italy"
							},
							"flag": "italy",
							"alpha2": "IT"
						},
						"userCount": 129140,
						"crowdsourcingEnabled": false,
						"hasPerformanceGraphFeature": false,
						"id": 328,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 422,
					"id": 35
				},
				"season": {
					"name": "Coppa Italia 24/25",
					"year": "24/25",
					"editor": false,
					"id": 63668
				},
				"roundInfo": {
					"round": 6,
					"name": "Round of 32",
					"cupRoundType": 16
				},
				"customId": "OdbsTfb",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "Lecce",
					"slug": "lecce",
					"shortName": "Lecce",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 141627,
					"nameCode": "LEC",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 2689,
					"country": {
						"alpha2": "IT",
						"alpha3": "ITA",
						"name": "Italy"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "نادي ليتشي",
							"ru": "Лечче"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Sassuolo",
					"slug": "sassuolo",
					"shortName": "Sassuolo",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 147780,
					"nameCode": "SAS",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 2793,
					"country": {
						"alpha2": "IT",
						"alpha3": "ITA",
						"name": "Italy"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "نادي ساسولو",
							"ru": "Сассуоло"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"awayScore": {
					"current": 2,
					"display": 2,
					"period1": 1,
					"period2": 1,
					"normaltime": 2
				},
				"time": {
					"injuryTime1": 0,
					"injuryTime2": 4,
					"currentPeriodStartTimestamp": 1727190162
				},
				"changes": {
					"changes": [
						"time.injuryTime2",
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727193118
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12726863,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727186400,
				"slug": "sassuolo-lecce",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Coppa Italia",
					"slug": "coppa-italia",
					"category": {
						"name": "Italy",
						"slug": "italy",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 31,
						"country": {
							"alpha2": "IT",
							"alpha3": "ITA",
							"name": "Italy"
						},
						"flag": "italy",
						"alpha2": "IT"
					},
					"uniqueTournament": {
						"name": "Coppa Italia",
						"slug": "coppa-italia",
						"category": {
							"name": "Italy",
							"slug": "italy",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 31,
							"country": {
								"alpha2": "IT",
								"alpha3": "ITA",
								"name": "Italy"
							},
							"flag": "italy",
							"alpha2": "IT"
						},
						"userCount": 129140,
						"crowdsourcingEnabled": false,
						"hasPerformanceGraphFeature": false,
						"id": 328,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 422,
					"id": 35
				},
				"season": {
					"name": "Coppa Italia 24/25",
					"year": "24/25",
					"editor": false,
					"id": 63668
				},
				"roundInfo": {
					"round": 6,
					"name": "Round of 32",
					"cupRoundType": 16
				},
				"customId": "uebslfb",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "Cagliari",
					"slug": "cagliari",
					"shortName": "Cagliari",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 125087,
					"nameCode": "CAG",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 2719,
					"country": {
						"alpha2": "IT",
						"alpha3": "ITA",
						"name": "Italy"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "نادي كالياري",
							"ru": "Кальяри"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Cremonese",
					"slug": "cremonese",
					"shortName": "Cremonese",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 49648,
					"nameCode": "CRE",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 2761,
					"country": {
						"alpha2": "IT",
						"alpha3": "ITA",
						"name": "Italy"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "كريمونيسي",
							"ru": "Кремонезе"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"injuryTime1": 0,
					"injuryTime2": 3,
					"currentPeriodStartTimestamp": 1727199022
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727201944
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12726865,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727195400,
				"slug": "cremonese-cagliari",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Coppa Italia",
					"slug": "coppa-italia",
					"category": {
						"name": "Italy",
						"slug": "italy",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 31,
						"country": {
							"alpha2": "IT",
							"alpha3": "ITA",
							"name": "Italy"
						},
						"flag": "italy",
						"alpha2": "IT"
					},
					"uniqueTournament": {
						"name": "Coppa Italia",
						"slug": "coppa-italia",
						"category": {
							"name": "Italy",
							"slug": "italy",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 31,
							"country": {
								"alpha2": "IT",
								"alpha3": "ITA",
								"name": "Italy"
							},
							"flag": "italy",
							"alpha2": "IT"
						},
						"userCount": 129140,
						"crowdsourcingEnabled": false,
						"hasPerformanceGraphFeature": false,
						"id": 328,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 422,
					"id": 35
				},
				"season": {
					"name": "Coppa Italia 24/25",
					"year": "24/25",
					"editor": false,
					"id": 63668
				},
				"roundInfo": {
					"round": 6,
					"name": "Round of 32",
					"cupRoundType": 16
				},
				"customId": "Wdbsfeb",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "Torino",
					"slug": "torino",
					"shortName": "Torino",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 186565,
					"nameCode": "TOR",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 2696,
					"country": {
						"alpha2": "IT",
						"alpha3": "ITA",
						"name": "Italy"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "نادي تورينو",
							"ru": "Торино"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Empoli",
					"slug": "empoli",
					"shortName": "Empoli",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 139242,
					"nameCode": "EMP",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 2705,
					"country": {
						"alpha2": "IT",
						"alpha3": "ITA",
						"name": "Italy"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "امبولي",
							"ru": "Эмполи"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"awayScore": {
					"current": 2,
					"display": 2,
					"period1": 1,
					"period2": 1,
					"normaltime": 2
				},
				"time": {
					"injuryTime1": 0,
					"injuryTime2": 5,
					"currentPeriodStartTimestamp": 1727208260
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727211339
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12726862,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727204400,
				"slug": "empoli-torino",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Coppa Italia",
					"slug": "coppa-italia",
					"category": {
						"name": "Italy",
						"slug": "italy",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 31,
						"country": {
							"alpha2": "IT",
							"alpha3": "ITA",
							"name": "Italy"
						},
						"flag": "italy",
						"alpha2": "IT"
					},
					"uniqueTournament": {
						"name": "Coppa Italia",
						"slug": "coppa-italia",
						"category": {
							"name": "Italy",
							"slug": "italy",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 31,
							"country": {
								"alpha2": "IT",
								"alpha3": "ITA",
								"name": "Italy"
							},
							"flag": "italy",
							"alpha2": "IT"
						},
						"userCount": 129140,
						"crowdsourcingEnabled": false,
						"hasPerformanceGraphFeature": false,
						"id": 328,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 422,
					"id": 35
				},
				"season": {
					"name": "Coppa Italia 24/25",
					"year": "24/25",
					"editor": false,
					"id": 63668
				},
				"roundInfo": {
					"round": 6,
					"name": "Round of 32",
					"cupRoundType": 16
				},
				"customId": "MebsReb",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "Pisa",
					"slug": "pisa",
					"shortName": "Pisa",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 15837,
					"nameCode": "PIS",
					"national": false,
					"type": 0,
					"id": 2737,
					"country": {
						"alpha2": "IT",
						"alpha3": "ITA",
						"name": "Italy"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Пиза"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Cesena",
					"slug": "cesena",
					"shortName": "Cesena",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 12648,
					"nameCode": "CES",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 2742,
					"country": {
						"alpha2": "IT",
						"alpha3": "ITA",
						"name": "Italy"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "سيسينا",
							"ru": "Футбольный клуб Чесена"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"awayScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"time": {
					"injuryTime1": 2,
					"injuryTime2": 6,
					"currentPeriodStartTimestamp": 1727276639
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727279724
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12726861,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727272800,
				"slug": "cesena-pisa",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Coppa Italia",
					"slug": "coppa-italia",
					"category": {
						"name": "Italy",
						"slug": "italy",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 31,
						"country": {
							"alpha2": "IT",
							"alpha3": "ITA",
							"name": "Italy"
						},
						"flag": "italy",
						"alpha2": "IT"
					},
					"uniqueTournament": {
						"name": "Coppa Italia",
						"slug": "coppa-italia",
						"category": {
							"name": "Italy",
							"slug": "italy",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 31,
							"country": {
								"alpha2": "IT",
								"alpha3": "ITA",
								"name": "Italy"
							},
							"flag": "italy",
							"alpha2": "IT"
						},
						"userCount": 129140,
						"crowdsourcingEnabled": false,
						"hasPerformanceGraphFeature": false,
						"id": 328,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 422,
					"id": 35
				},
				"season": {
					"name": "Coppa Italia 24/25",
					"year": "24/25",
					"editor": false,
					"id": 63668
				},
				"roundInfo": {
					"round": 6,
					"name": "Round of 32",
					"cupRoundType": 16
				},
				"customId": "Vdbskeb",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "Udinese",
					"slug": "udinese",
					"shortName": "Udinese",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 150000,
					"nameCode": "UDI",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 2695,
					"country": {
						"alpha2": "IT",
						"alpha3": "ITA",
						"name": "Italy"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "نادي أودينيزي",
							"ru": "Удинезе"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Salernitana",
					"slug": "salernitana",
					"shortName": "Salernitana",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 113902,
					"nameCode": "SAL",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 2710,
					"country": {
						"alpha2": "IT",
						"alpha3": "ITA",
						"name": "Italy"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "اونيوني سپورتيڢا ساليرنيتانا 1919",
							"ru": "Салернитана"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 3,
					"display": 3,
					"period1": 2,
					"period2": 1,
					"normaltime": 3
				},
				"awayScore": {
					"current": 1,
					"display": 1,
					"period1": 1,
					"period2": 0,
					"normaltime": 1
				},
				"time": {
					"injuryTime1": 2,
					"injuryTime2": 7,
					"currentPeriodStartTimestamp": 1727285549
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727288779
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12726859,
				"awayRedCards": 1,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727281800,
				"slug": "salernitana-udinese",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Coppa Italia",
					"slug": "coppa-italia",
					"category": {
						"name": "Italy",
						"slug": "italy",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 31,
						"country": {
							"alpha2": "IT",
							"alpha3": "ITA",
							"name": "Italy"
						},
						"flag": "italy",
						"alpha2": "IT"
					},
					"uniqueTournament": {
						"name": "Coppa Italia",
						"slug": "coppa-italia",
						"category": {
							"name": "Italy",
							"slug": "italy",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 31,
							"country": {
								"alpha2": "IT",
								"alpha3": "ITA",
								"name": "Italy"
							},
							"flag": "italy",
							"alpha2": "IT"
						},
						"userCount": 129140,
						"crowdsourcingEnabled": false,
						"hasPerformanceGraphFeature": false,
						"id": 328,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 422,
					"id": 35
				},
				"season": {
					"name": "Coppa Italia 24/25",
					"year": "24/25",
					"editor": false,
					"id": 63668
				},
				"roundInfo": {
					"round": 6,
					"name": "Round of 32",
					"cupRoundType": 16
				},
				"customId": "lebsneb",
				"status": {
					"code": 120,
					"description": "AP",
					"type": "finished"
				},
				"winnerCode": 3,
				"homeTeam": {
					"name": "Genoa",
					"slug": "genoa",
					"shortName": "Genoa",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 143004,
					"nameCode": "GEN",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 2713,
					"country": {
						"alpha2": "IT",
						"alpha3": "ITA",
						"name": "Italy"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "نادي جنوى",
							"ru": "Дженоа"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "U.C Sampdoria",
					"slug": "sampdoria",
					"shortName": "Sampdoria",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 63971,
					"nameCode": "SAM",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 2711,
					"country": {
						"alpha2": "IT",
						"alpha3": "ITA",
						"name": "Italy"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "نادي سامبدوريا",
							"ru": "Сампдория"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 6,
					"display": 1,
					"period1": 1,
					"period2": 0,
					"normaltime": 1,
					"penalties": 5
				},
				"awayScore": {
					"current": 7,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1,
					"penalties": 6
				},
				"time": {
					"injuryTime1": 2,
					"injuryTime2": 4,
					"currentPeriodStartTimestamp": 1727294595
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.display",
						"homeScore.penalties",
						"awayScore.display",
						"awayScore.penalties"
					],
					"changeTimestamp": 1727298418
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12726866,
				"awayRedCards": 1,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727290800,
				"slug": "genoa-uc-sampdoria",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "UEFA Champions League, Women, Qualification",
					"slug": "uefa-champions-league-women-qualification",
					"category": {
						"name": "Europe",
						"slug": "europe",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 1465,
						"country": {},
						"flag": "europe"
					},
					"uniqueTournament": {
						"name": "UEFA Women's Champions League",
						"slug": "uefa-womens-champions-league",
						"category": {
							"name": "Europe",
							"slug": "europe",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 1465,
							"country": {},
							"flag": "europe"
						},
						"userCount": 66630,
						"id": 696,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 331,
					"isGroup": false,
					"isLive": false,
					"id": 94158
				},
				"season": {
					"name": "UEFA Champions League Women 24/25",
					"year": "24/25",
					"editor": false,
					"id": 63572
				},
				"customId": "GqpscNld",
				"status": {
					"code": 110,
					"description": "AET",
					"type": "finished"
				},
				"winnerCode": 2,
				"aggregatedWinnerCode": 2,
				"homeTeam": {
					"name": "SK Slavia Praha",
					"slug": "sk-slavia-praha",
					"shortName": "Slavia Praha",
					"gender": "F",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 7344,
					"nameCode": "SLA",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 38331,
					"country": {
						"alpha2": "CZ",
						"alpha3": "CZE",
						"name": "Czechia"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#ffffff",
						"secondary": "#e10000",
						"text": "#e10000"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Славия Прага"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Galatasaray Istanbul",
					"slug": "galatasaray-istanbul",
					"shortName": "Galatasaray Istanbul",
					"gender": "F",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 2799,
					"nameCode": "GIS",
					"national": false,
					"type": 0,
					"id": 404402,
					"country": {},
					"subTeams": [],
					"teamColors": {
						"primary": "#ff9900",
						"secondary": "#222226",
						"text": "#222226"
					}
				},
				"homeScore": {
					"current": 1,
					"display": 1,
					"period1": 1,
					"period2": 0,
					"normaltime": 1,
					"overtime": 0,
					"aggregated": 3
				},
				"awayScore": {
					"current": 2,
					"display": 2,
					"period1": 0,
					"period2": 1,
					"normaltime": 1,
					"overtime": 1,
					"aggregated": 4
				},
				"time": {
					"injuryTime1": 2,
					"injuryTime2": 5,
					"injuryTime3": 2,
					"injuryTime4": 4,
					"currentPeriodStartTimestamp": 1727289663
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.overtime",
						"awayScore.overtime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727289667
				},
				"hasGlobalHighlights": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12816755,
				"crowdsourcingEnabled": false,
				"previousLegEventId": 12816754,
				"startTimestamp": 1727280000,
				"slug": "galatasaray-istanbul-sk-slavia-praha",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "UEFA Champions League, Women, Qualification",
					"slug": "uefa-champions-league-women-qualification",
					"category": {
						"name": "Europe",
						"slug": "europe",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 1465,
						"country": {},
						"flag": "europe"
					},
					"uniqueTournament": {
						"name": "UEFA Women's Champions League",
						"slug": "uefa-womens-champions-league",
						"category": {
							"name": "Europe",
							"slug": "europe",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 1465,
							"country": {},
							"flag": "europe"
						},
						"userCount": 66630,
						"id": 696,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 331,
					"isGroup": false,
					"isLive": false,
					"id": 94158
				},
				"season": {
					"name": "UEFA Champions League Women 24/25",
					"year": "24/25",
					"editor": false,
					"id": 63572
				},
				"customId": "glcslYfc",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"aggregatedWinnerCode": 1,
				"homeTeam": {
					"name": "VfL Wolfsburg",
					"slug": "vfl-wolfsburg",
					"shortName": "Wolfsburg",
					"gender": "F",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 25389,
					"nameCode": "WOL",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 5556,
					"country": {
						"alpha2": "DE",
						"alpha3": "DEU",
						"name": "Germany"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#66ff66",
						"secondary": "#000000",
						"text": "#000000"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Вфл Вольфсбург"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Fiorentina",
					"slug": "fiorentina",
					"shortName": "Fiorentina",
					"gender": "F",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 6712,
					"nameCode": "ACF",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 264911,
					"country": {
						"alpha2": "IT",
						"alpha3": "ITA",
						"name": "Italy"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#542baa",
						"secondary": "#ffffff",
						"text": "#ffffff"
					}
				},
				"homeScore": {
					"current": 5,
					"display": 5,
					"period1": 2,
					"period2": 3,
					"normaltime": 5,
					"aggregated": 12
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0,
					"aggregated": 0
				},
				"time": {
					"currentPeriodStartTimestamp": 1727288579
				},
				"changes": {
					"changes": [
						"cardsCode",
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727288589
				},
				"hasGlobalHighlights": false,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12816756,
				"awayRedCards": 1,
				"crowdsourcingEnabled": false,
				"previousLegEventId": 12816733,
				"startTimestamp": 1727281800,
				"slug": "fiorentina-vfl-wolfsburg",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "UEFA Champions League, Women, Qualification",
					"slug": "uefa-champions-league-women-qualification",
					"category": {
						"name": "Europe",
						"slug": "europe",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 1465,
						"country": {},
						"flag": "europe"
					},
					"uniqueTournament": {
						"name": "UEFA Women's Champions League",
						"slug": "uefa-womens-champions-league",
						"category": {
							"name": "Europe",
							"slug": "europe",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 1465,
							"country": {},
							"flag": "europe"
						},
						"userCount": 66630,
						"id": 696,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 331,
					"isGroup": false,
					"isLive": false,
					"id": 94158
				},
				"season": {
					"name": "UEFA Champions League Women 24/25",
					"year": "24/25",
					"editor": false,
					"id": 63572
				},
				"customId": "cUzscpwb",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"aggregatedWinnerCode": 1,
				"homeTeam": {
					"name": "Vålerenga",
					"slug": "valerenga",
					"shortName": "Vålerenga",
					"gender": "F",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 5888,
					"nameCode": "VAL",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 62202,
					"country": {
						"alpha2": "NO",
						"alpha3": "NOR",
						"name": "Norway"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#003399",
						"secondary": "#cc0000",
						"text": "#cc0000"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "ФК Валеренга"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Anderlecht",
					"slug": "anderlecht",
					"shortName": "Anderlecht",
					"gender": "F",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 5111,
					"nameCode": "AND",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 178252,
					"country": {
						"alpha2": "BE",
						"alpha3": "BEL",
						"name": "Belgium"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#330066",
						"secondary": "#ffffff",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "لاديز أندرلخت",
							"ru": "РСЦ Андерлехт Лэйдиес"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 3,
					"display": 3,
					"period1": 0,
					"period2": 3,
					"normaltime": 3,
					"aggregated": 5
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0,
					"aggregated": 1
				},
				"time": {
					"injuryTime2": 4,
					"currentPeriodStartTimestamp": 1727288487
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727288492
				},
				"hasGlobalHighlights": false,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12816745,
				"crowdsourcingEnabled": false,
				"previousLegEventId": 12816738,
				"startTimestamp": 1727281800,
				"slug": "anderlecht-valerenga",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "UEFA Champions League, Women, Qualification",
					"slug": "uefa-champions-league-women-qualification",
					"category": {
						"name": "Europe",
						"slug": "europe",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 1465,
						"country": {},
						"flag": "europe"
					},
					"uniqueTournament": {
						"name": "UEFA Women's Champions League",
						"slug": "uefa-womens-champions-league",
						"category": {
							"name": "Europe",
							"slug": "europe",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 1465,
							"country": {},
							"flag": "europe"
						},
						"userCount": 66630,
						"id": 696,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 331,
					"isGroup": false,
					"isLive": false,
					"id": 94158
				},
				"season": {
					"name": "UEFA Champions League Women 24/25",
					"year": "24/25",
					"editor": false,
					"id": 63572
				},
				"customId": "JMsdhuc",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"aggregatedWinnerCode": 3,
				"homeTeam": {
					"name": "Benfica",
					"slug": "benfica",
					"shortName": "Benfica",
					"gender": "F",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 28699,
					"nameCode": "SLB",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 297853,
					"country": {
						"alpha2": "PT",
						"alpha3": "PRT",
						"name": "Portugal"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#cc0000",
						"secondary": "#ffffff",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Бенфика"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Hammarby IF",
					"slug": "hammarby-if",
					"shortName": "Hammarby",
					"gender": "F",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 5126,
					"nameCode": "HAM",
					"national": false,
					"type": 0,
					"id": 1884,
					"country": {
						"alpha2": "SE",
						"alpha3": "SWE",
						"name": "Sweden"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "هاماربي اي اف دي إف إف",
							"ru": "Хаммарбю"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0,
					"aggregated": 2
				},
				"awayScore": {
					"current": 2,
					"display": 2,
					"period1": 1,
					"period2": 1,
					"normaltime": 2,
					"aggregated": 3
				},
				"time": {
					"currentPeriodStartTimestamp": 1727294431
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"awayScore.period2",
						"awayScore.normaltime"
					],
					"changeTimestamp": 1727297579
				},
				"hasGlobalHighlights": false,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12819030,
				"crowdsourcingEnabled": false,
				"previousLegEventId": 12816752,
				"startTimestamp": 1727290800,
				"slug": "benfica-hammarby-if",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Ligue 2",
					"slug": "ligue-2",
					"category": {
						"name": "France",
						"slug": "france",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 7,
						"country": {
							"alpha2": "FR",
							"alpha3": "FRA",
							"name": "France"
						},
						"flag": "france",
						"alpha2": "FR"
					},
					"uniqueTournament": {
						"name": "Ligue 2",
						"slug": "ligue-2",
						"category": {
							"name": "France",
							"slug": "france",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 7,
							"country": {
								"alpha2": "FR",
								"alpha3": "FRA",
								"name": "France"
							},
							"flag": "france",
							"alpha2": "FR"
						},
						"userCount": 45165,
						"id": 182,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 308,
					"id": 19
				},
				"season": {
					"name": "Ligue 2 24/25",
					"year": "24/25",
					"editor": false,
					"id": 61737
				},
				"roundInfo": {
					"round": 6
				},
				"customId": "kIswI",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "Ajaccio",
					"slug": "ajaccio",
					"shortName": "Ajaccio",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 23517,
					"nameCode": "ACA",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 1660,
					"country": {
						"alpha2": "FR",
						"alpha3": "FRA",
						"name": "France"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "اجاكسيو",
							"ru": "Аяччо"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Grenoble Foot 38",
					"slug": "grenoble-foot-38",
					"shortName": "Grenoble",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 10508,
					"nameCode": "GRE",
					"national": false,
					"type": 0,
					"id": 1671,
					"country": {
						"alpha2": "FR",
						"alpha3": "FRA",
						"name": "France"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "جرينوبل فوت",
							"ru": "Гренобль Фут"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 2,
					"display": 2,
					"period1": 0,
					"period2": 2,
					"normaltime": 2
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"injuryTime1": 2,
					"injuryTime2": 5,
					"currentPeriodStartTimestamp": 1727206375
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727209394
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12451188,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727202600,
				"slug": "grenoble-foot-38-ajaccio",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Ligue 2",
					"slug": "ligue-2",
					"category": {
						"name": "France",
						"slug": "france",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 7,
						"country": {
							"alpha2": "FR",
							"alpha3": "FRA",
							"name": "France"
						},
						"flag": "france",
						"alpha2": "FR"
					},
					"uniqueTournament": {
						"name": "Ligue 2",
						"slug": "ligue-2",
						"category": {
							"name": "France",
							"slug": "france",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 7,
							"country": {
								"alpha2": "FR",
								"alpha3": "FRA",
								"name": "France"
							},
							"flag": "france",
							"alpha2": "FR"
						},
						"userCount": 45165,
						"id": 182,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 308,
					"id": 19
				},
				"season": {
					"name": "Ligue 2 24/25",
					"year": "24/25",
					"editor": false,
					"id": 61737
				},
				"roundInfo": {
					"round": 6
				},
				"customId": "cIsUrJb",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "Annecy FC",
					"slug": "annecy-fc",
					"shortName": "Annecy",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 9757,
					"nameCode": "ANN",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 210894,
					"country": {
						"alpha2": "FR",
						"alpha3": "FRA",
						"name": "France"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "أنيسي"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Troyes",
					"slug": "troyes",
					"shortName": "Troyes",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 20707,
					"nameCode": "EST",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 1652,
					"country": {
						"alpha2": "FR",
						"alpha3": "FRA",
						"name": "France"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "تروا أي سي",
							"ru": "Труа"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 1,
					"display": 1,
					"period1": 1,
					"period2": 0,
					"normaltime": 1
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"injuryTime1": 1,
					"injuryTime2": 7,
					"currentPeriodStartTimestamp": 1727206488
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727209628
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12615547,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727202600,
				"slug": "annecy-fc-troyes",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Ligue 2",
					"slug": "ligue-2",
					"category": {
						"name": "France",
						"slug": "france",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 7,
						"country": {
							"alpha2": "FR",
							"alpha3": "FRA",
							"name": "France"
						},
						"flag": "france",
						"alpha2": "FR"
					},
					"uniqueTournament": {
						"name": "Ligue 2",
						"slug": "ligue-2",
						"category": {
							"name": "France",
							"slug": "france",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 7,
							"country": {
								"alpha2": "FR",
								"alpha3": "FRA",
								"name": "France"
							},
							"flag": "france",
							"alpha2": "FR"
						},
						"userCount": 45165,
						"id": 182,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 308,
					"id": 19
				},
				"season": {
					"name": "Ligue 2 24/25",
					"year": "24/25",
					"editor": false,
					"id": 61737
				},
				"roundInfo": {
					"round": 6
				},
				"customId": "rIsBI",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "Caen",
					"slug": "caen",
					"shortName": "Caen",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 12837,
					"nameCode": "SMC",
					"national": false,
					"type": 0,
					"id": 1667,
					"country": {
						"alpha2": "FR",
						"alpha3": "FRA",
						"name": "France"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "إس إم كاين",
							"ru": "Кан"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Amiens SC",
					"slug": "amiens-sc",
					"shortName": "Amiens",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 10700,
					"nameCode": "AMI",
					"national": false,
					"type": 0,
					"id": 1676,
					"country": {
						"alpha2": "FR",
						"alpha3": "FRA",
						"name": "France"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "نادي أميان",
							"ru": "Амьен"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 2,
					"display": 2,
					"period1": 1,
					"period2": 1,
					"normaltime": 2
				},
				"awayScore": {
					"current": 1,
					"display": 1,
					"period1": 1,
					"period2": 0,
					"normaltime": 1
				},
				"time": {
					"injuryTime1": 2,
					"injuryTime2": 8,
					"currentPeriodStartTimestamp": 1727206438
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727209641
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12451182,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727202600,
				"slug": "amiens-sc-caen",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Ligue 2",
					"slug": "ligue-2",
					"category": {
						"name": "France",
						"slug": "france",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 7,
						"country": {
							"alpha2": "FR",
							"alpha3": "FRA",
							"name": "France"
						},
						"flag": "france",
						"alpha2": "FR"
					},
					"uniqueTournament": {
						"name": "Ligue 2",
						"slug": "ligue-2",
						"category": {
							"name": "France",
							"slug": "france",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 7,
							"country": {
								"alpha2": "FR",
								"alpha3": "FRA",
								"name": "France"
							},
							"flag": "france",
							"alpha2": "FR"
						},
						"userCount": 45165,
						"id": 182,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 308,
					"id": 19
				},
				"season": {
					"name": "Ligue 2 24/25",
					"year": "24/25",
					"editor": false,
					"id": 61737
				},
				"roundInfo": {
					"round": 6
				},
				"customId": "FIszhw",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 3,
				"homeTeam": {
					"name": "Clermont Foot",
					"slug": "clermont-foot",
					"shortName": "Clermont",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 54394,
					"nameCode": "CF63",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 1680,
					"country": {
						"alpha2": "FR",
						"alpha3": "FRA",
						"name": "France"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "كليرمونت فووت",
							"ru": "Клермон"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Red Star FC",
					"slug": "red-star-fc",
					"shortName": "Red Star",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 20486,
					"nameCode": "RST",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 52874,
					"country": {
						"alpha2": "FR",
						"alpha3": "FRA",
						"name": "France"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "إف سي النّجم الأحمر ٩٣",
							"ru": "Ред Стар"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 1,
					"display": 1,
					"period1": 1,
					"period2": 0,
					"normaltime": 1
				},
				"awayScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"time": {
					"injuryTime1": 4,
					"injuryTime2": 7,
					"currentPeriodStartTimestamp": 1727206512
				},
				"changes": {
					"changes": [
						"time.injuryTime2",
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727209655
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12451190,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727202600,
				"slug": "red-star-fc-clermont-foot",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Ligue 2",
					"slug": "ligue-2",
					"category": {
						"name": "France",
						"slug": "france",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 7,
						"country": {
							"alpha2": "FR",
							"alpha3": "FRA",
							"name": "France"
						},
						"flag": "france",
						"alpha2": "FR"
					},
					"uniqueTournament": {
						"name": "Ligue 2",
						"slug": "ligue-2",
						"category": {
							"name": "France",
							"slug": "france",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 7,
							"country": {
								"alpha2": "FR",
								"alpha3": "FRA",
								"name": "France"
							},
							"flag": "france",
							"alpha2": "FR"
						},
						"userCount": 45165,
						"id": 182,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 308,
					"id": 19
				},
				"season": {
					"name": "Ligue 2 24/25",
					"year": "24/25",
					"editor": false,
					"id": 61737
				},
				"roundInfo": {
					"round": 6
				},
				"customId": "fIstNc",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "Dunkerque",
					"slug": "dunkerque",
					"shortName": "Dunkerque",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 8556,
					"nameCode": "DUN",
					"national": false,
					"type": 0,
					"id": 6918,
					"country": {
						"alpha2": "FR",
						"alpha3": "FRA",
						"name": "France"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Дункеркью"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Bastia",
					"slug": "bastia",
					"shortName": "Bastia",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 11054,
					"nameCode": "SCB",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 1655,
					"country": {
						"alpha2": "FR",
						"alpha3": "FRA",
						"name": "France"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "سبورتنج كلب دي باستيا",
							"ru": "Бастия"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 2,
					"display": 2,
					"period1": 0,
					"period2": 2,
					"normaltime": 2
				},
				"awayScore": {
					"current": 1,
					"display": 1,
					"period1": 1,
					"period2": 0,
					"normaltime": 1
				},
				"time": {
					"injuryTime1": 1,
					"injuryTime2": 5,
					"currentPeriodStartTimestamp": 1727206389
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727209496
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12451189,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727202600,
				"slug": "dunkerque-bastia",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Ligue 2",
					"slug": "ligue-2",
					"category": {
						"name": "France",
						"slug": "france",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 7,
						"country": {
							"alpha2": "FR",
							"alpha3": "FRA",
							"name": "France"
						},
						"flag": "france",
						"alpha2": "FR"
					},
					"uniqueTournament": {
						"name": "Ligue 2",
						"slug": "ligue-2",
						"category": {
							"name": "France",
							"slug": "france",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 7,
							"country": {
								"alpha2": "FR",
								"alpha3": "FRA",
								"name": "France"
							},
							"flag": "france",
							"alpha2": "FR"
						},
						"userCount": 45165,
						"id": 182,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 308,
					"id": 19
				},
				"season": {
					"name": "Ligue 2 24/25",
					"year": "24/25",
					"editor": false,
					"id": 61737
				},
				"roundInfo": {
					"round": 6
				},
				"customId": "bIsoI",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "Metz",
					"slug": "metz",
					"shortName": "Metz",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 64828,
					"nameCode": "FCM",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 1651,
					"country": {
						"alpha2": "FR",
						"alpha3": "FRA",
						"name": "France"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "نادي ميتز",
							"ru": "Метц"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "FC Martigues",
					"slug": "fc-martigues",
					"shortName": "Martigues",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 8972,
					"nameCode": "MAR",
					"national": false,
					"type": 0,
					"id": 1664,
					"country": {
						"alpha2": "FR",
						"alpha3": "FRA",
						"name": "France"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "مارتيجيز",
							"ru": "ФК Мартик"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 6,
					"display": 6,
					"period1": 3,
					"period2": 3,
					"normaltime": 6
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"injuryTime1": 3,
					"injuryTime2": 4,
					"currentPeriodStartTimestamp": 1727206512
				},
				"changes": {
					"changes": [
						"time.injuryTime2",
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727209472
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12451185,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727202600,
				"slug": "fc-martigues-metz",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Ligue 2",
					"slug": "ligue-2",
					"category": {
						"name": "France",
						"slug": "france",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 7,
						"country": {
							"alpha2": "FR",
							"alpha3": "FRA",
							"name": "France"
						},
						"flag": "france",
						"alpha2": "FR"
					},
					"uniqueTournament": {
						"name": "Ligue 2",
						"slug": "ligue-2",
						"category": {
							"name": "France",
							"slug": "france",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 7,
							"country": {
								"alpha2": "FR",
								"alpha3": "FRA",
								"name": "France"
							},
							"flag": "france",
							"alpha2": "FR"
						},
						"userCount": 45165,
						"id": 182,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 308,
					"id": 19
				},
				"season": {
					"name": "Ligue 2 24/25",
					"year": "24/25",
					"editor": false,
					"id": 61737
				},
				"roundInfo": {
					"round": 6
				},
				"customId": "eIsvwc",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "Paris FC",
					"slug": "paris-fc",
					"shortName": "Paris",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 19909,
					"nameCode": "PAR",
					"national": false,
					"type": 0,
					"id": 6070,
					"country": {
						"alpha2": "FR",
						"alpha3": "FRA",
						"name": "France"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "Paris FC",
							"ru": "Париж ФК"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Guingamp",
					"slug": "guingamp",
					"shortName": "Guingamp",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 11370,
					"nameCode": "EAG",
					"national": false,
					"type": 0,
					"id": 1654,
					"country": {
						"alpha2": "FR",
						"alpha3": "FRA",
						"name": "France"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "جونجامب",
							"ru": "Генгам"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 2,
					"display": 2,
					"period1": 1,
					"period2": 1,
					"normaltime": 2
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"injuryTime1": 2,
					"injuryTime2": 6,
					"currentPeriodStartTimestamp": 1727206518
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727209593
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12451186,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727202600,
				"slug": "paris-fc-guingamp",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Ligue 2",
					"slug": "ligue-2",
					"category": {
						"name": "France",
						"slug": "france",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 7,
						"country": {
							"alpha2": "FR",
							"alpha3": "FRA",
							"name": "France"
						},
						"flag": "france",
						"alpha2": "FR"
					},
					"uniqueTournament": {
						"name": "Ligue 2",
						"slug": "ligue-2",
						"category": {
							"name": "France",
							"slug": "france",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 7,
							"country": {
								"alpha2": "FR",
								"alpha3": "FRA",
								"name": "France"
							},
							"flag": "france",
							"alpha2": "FR"
						},
						"userCount": 45165,
						"id": 182,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 308,
					"id": 19
				},
				"season": {
					"name": "Ligue 2 24/25",
					"year": "24/25",
					"editor": false,
					"id": 61737
				},
				"roundInfo": {
					"round": 6
				},
				"customId": "gIsKI",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "Pau FC",
					"slug": "pau-fc",
					"shortName": "Pau",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 9502,
					"nameCode": "PAU",
					"national": false,
					"type": 0,
					"id": 1685,
					"country": {
						"alpha2": "FR",
						"alpha3": "FRA",
						"name": "France"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Пау ФК"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Lorient",
					"slug": "lorient",
					"shortName": "Lorient",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 72966,
					"nameCode": "FCL",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 1656,
					"country": {
						"alpha2": "FR",
						"alpha3": "FRA",
						"name": "France"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "لوريان",
							"ru": "Лорьян"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 1,
					"display": 1,
					"period1": 1,
					"period2": 0,
					"normaltime": 1
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"injuryTime1": 3,
					"injuryTime2": 5,
					"currentPeriodStartTimestamp": 1727206534
				},
				"changes": {
					"changes": [
						"time.injuryTime2",
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727209566
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12451187,
				"awayRedCards": 1,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727202600,
				"slug": "pau-fc-lorient",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Ligue 2",
					"slug": "ligue-2",
					"category": {
						"name": "France",
						"slug": "france",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 7,
						"country": {
							"alpha2": "FR",
							"alpha3": "FRA",
							"name": "France"
						},
						"flag": "france",
						"alpha2": "FR"
					},
					"uniqueTournament": {
						"name": "Ligue 2",
						"slug": "ligue-2",
						"category": {
							"name": "France",
							"slug": "france",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 7,
							"country": {
								"alpha2": "FR",
								"alpha3": "FRA",
								"name": "France"
							},
							"flag": "france",
							"alpha2": "FR"
						},
						"userCount": 45165,
						"id": 182,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 308,
					"id": 19
				},
				"season": {
					"name": "Ligue 2 24/25",
					"year": "24/25",
					"editor": false,
					"id": 61737
				},
				"roundInfo": {
					"round": 6
				},
				"customId": "yIsANc",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "Rodez AF",
					"slug": "rodez-af",
					"shortName": "Rodez",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 10225,
					"nameCode": "ROD",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 6925,
					"country": {
						"alpha2": "FR",
						"alpha3": "FRA",
						"name": "France"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Родез Авейрон"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Stade Lavallois",
					"slug": "stade-lavallois",
					"shortName": "Laval",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 10700,
					"nameCode": "LAV",
					"national": false,
					"type": 0,
					"id": 1673,
					"country": {
						"alpha2": "FR",
						"alpha3": "FRA",
						"name": "France"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					}
				},
				"homeScore": {
					"current": 1,
					"display": 1,
					"period1": 1,
					"period2": 0,
					"normaltime": 1
				},
				"awayScore": {
					"current": 3,
					"display": 3,
					"period1": 0,
					"period2": 3,
					"normaltime": 3
				},
				"time": {
					"injuryTime1": 2,
					"injuryTime2": 5,
					"currentPeriodStartTimestamp": 1727206518
				},
				"changes": {
					"changes": [
						"time.injuryTime2",
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727209539
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12451192,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727202600,
				"slug": "rodez-af-stade-lavallois",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Brasileirão Série B",
					"slug": "brasileirao-serie-b",
					"category": {
						"name": "Brazil",
						"slug": "brazil",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 13,
						"country": {
							"alpha2": "BR",
							"alpha3": "BRA",
							"name": "Brazil"
						},
						"flag": "brazil",
						"alpha2": "BR"
					},
					"uniqueTournament": {
						"name": "Brasileirão Série B",
						"slug": "brasileirao-serie-b",
						"category": {
							"name": "Brazil",
							"slug": "brazil",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 13,
							"country": {
								"alpha2": "BR",
								"alpha3": "BRA",
								"name": "Brazil"
							},
							"flag": "brazil",
							"alpha2": "BR"
						},
						"userCount": 116180,
						"id": 390,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 300,
					"id": 1449
				},
				"season": {
					"name": "Brasileiro Serie B 2024",
					"year": "2024",
					"editor": false,
					"id": 59015
				},
				"roundInfo": {
					"round": 28
				},
				"customId": "xOsJRp",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "Operário-PR",
					"slug": "operario-pr",
					"shortName": "Operário-PR",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 18618,
					"nameCode": "FER",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 39634,
					"country": {
						"alpha2": "BR",
						"alpha3": "BRA",
						"name": "Brazil"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Операрио Ферровиарио"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Guarani",
					"slug": "guarani",
					"shortName": "Guarani",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 28018,
					"nameCode": "GUA",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 1972,
					"country": {
						"alpha2": "BR",
						"alpha3": "BRA",
						"name": "Brazil"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Гуарани Кампинас"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"injuryTime1": 3,
					"injuryTime2": 8,
					"currentPeriodStartTimestamp": 1727219124
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727222487
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12146457,
				"awayRedCards": 1,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727215200,
				"slug": "operario-pr-guarani",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Brasileirão Série B",
					"slug": "brasileirao-serie-b",
					"category": {
						"name": "Brazil",
						"slug": "brazil",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 13,
						"country": {
							"alpha2": "BR",
							"alpha3": "BRA",
							"name": "Brazil"
						},
						"flag": "brazil",
						"alpha2": "BR"
					},
					"uniqueTournament": {
						"name": "Brasileirão Série B",
						"slug": "brasileirao-serie-b",
						"category": {
							"name": "Brazil",
							"slug": "brazil",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 13,
							"country": {
								"alpha2": "BR",
								"alpha3": "BRA",
								"name": "Brazil"
							},
							"flag": "brazil",
							"alpha2": "BR"
						},
						"userCount": 116180,
						"id": 390,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 300,
					"id": 1449
				},
				"season": {
					"name": "Brasileiro Serie B 2024",
					"year": "2024",
					"editor": false,
					"id": 59015
				},
				"roundInfo": {
					"round": 28
				},
				"customId": "EOsHPi",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 3,
				"homeTeam": {
					"name": "Botafogo-SP",
					"slug": "botafogo-sp",
					"shortName": "Botafogo-SP",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 23926,
					"nameCode": "BOT",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 1979,
					"country": {
						"alpha2": "BR",
						"alpha3": "BRA",
						"name": "Brazil"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "ФК Ботафого СП"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "CRB",
					"slug": "crb",
					"shortName": "CRB",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 31462,
					"nameCode": "BRA",
					"national": false,
					"type": 0,
					"id": 22032,
					"country": {
						"alpha2": "BR",
						"alpha3": "BRA",
						"name": "Brazil"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Клуб Регатас Бразил"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"injuryTime1": 4,
					"injuryTime2": 6,
					"currentPeriodStartTimestamp": 1727228154
				},
				"changes": {
					"changes": [
						"time.injuryTime2",
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727231272
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12146463,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727224200,
				"slug": "crb-botafogo-sp",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Brasileirão Série B",
					"slug": "brasileirao-serie-b",
					"category": {
						"name": "Brazil",
						"slug": "brazil",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 13,
						"country": {
							"alpha2": "BR",
							"alpha3": "BRA",
							"name": "Brazil"
						},
						"flag": "brazil",
						"alpha2": "BR"
					},
					"uniqueTournament": {
						"name": "Brasileirão Série B",
						"slug": "brasileirao-serie-b",
						"category": {
							"name": "Brazil",
							"slug": "brazil",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 13,
							"country": {
								"alpha2": "BR",
								"alpha3": "BRA",
								"name": "Brazil"
							},
							"flag": "brazil",
							"alpha2": "BR"
						},
						"userCount": 116180,
						"id": 390,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 300,
					"id": 1449
				},
				"season": {
					"name": "Brasileiro Serie B 2024",
					"year": "2024",
					"editor": false,
					"id": 59015
				},
				"roundInfo": {
					"round": 28
				},
				"customId": "uOsyO",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "Ponte Preta",
					"slug": "ponte-preta",
					"shortName": "Ponte Preta",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 27050,
					"nameCode": "PON",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 1969,
					"country": {
						"alpha2": "BR",
						"alpha3": "BRA",
						"name": "Brazil"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Понте Прета"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "América Mineiro",
					"slug": "america-mineiro",
					"shortName": "América-MG",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 73430,
					"nameCode": "AMG",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 1973,
					"country": {
						"alpha2": "BR",
						"alpha3": "BRA",
						"name": "Brazil"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Америка Минейро"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"awayScore": {
					"current": 2,
					"display": 2,
					"period1": 1,
					"period2": 1,
					"normaltime": 2
				},
				"time": {
					"injuryTime1": 6,
					"injuryTime2": 5,
					"currentPeriodStartTimestamp": 1727228249
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727231248
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12146462,
				"homeRedCards": 1,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727224200,
				"slug": "america-mineiro-ponte-preta",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "1. Lig",
					"slug": "trendyol-1lig",
					"category": {
						"name": "Turkey",
						"slug": "turkey",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 46,
						"country": {
							"alpha2": "TR",
							"alpha3": "TUR",
							"name": "Türkiye"
						},
						"flag": "turkey",
						"alpha2": "TR"
					},
					"uniqueTournament": {
						"name": "Trendyol 1.Lig",
						"slug": "trendyol-1lig",
						"category": {
							"name": "Turkey",
							"slug": "turkey",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 46,
							"country": {
								"alpha2": "TR",
								"alpha3": "TUR",
								"name": "Türkiye"
							},
							"flag": "turkey",
							"alpha2": "TR"
						},
						"userCount": 15186,
						"id": 98,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 293,
					"id": 101
				},
				"season": {
					"name": "1. Lig 24/25",
					"year": "24/25",
					"editor": false,
					"id": 64425
				},
				"roundInfo": {
					"round": 2
				},
				"customId": "jVjsFZec",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "Esenler Erokspor",
					"slug": "esenler-erokspor",
					"shortName": "Erokspor",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 2293,
					"nameCode": "ESE",
					"national": false,
					"type": 0,
					"id": 262480,
					"country": {
						"alpha2": "TR",
						"alpha3": "TUR",
						"name": "Türkiye"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					}
				},
				"awayTeam": {
					"name": "Yeni Malatyaspor",
					"slug": "yeni-malatyaspor",
					"shortName": "Yeni Malatyaspor",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 3797,
					"nameCode": "MLT",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 24759,
					"country": {
						"alpha2": "TR",
						"alpha3": "TUR",
						"name": "Türkiye"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "مالاتيا بي إل دي سبور",
							"ru": "ФК Малатия Спор"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 2,
					"display": 2,
					"period1": 1,
					"period2": 1,
					"normaltime": 2
				},
				"awayScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"time": {
					"injuryTime1": 3,
					"injuryTime2": 6,
					"currentPeriodStartTimestamp": 1727201064
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727204214
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12888271,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727197200,
				"slug": "esenler-erokspor-yeni-malatyaspor",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Bundesliga",
					"slug": "bundesliga",
					"category": {
						"name": "Austria",
						"slug": "austria",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 17,
						"country": {
							"alpha2": "AT",
							"alpha3": "AUT",
							"name": "Austria"
						},
						"flag": "austria",
						"alpha2": "AT"
					},
					"uniqueTournament": {
						"name": "Austrian Bundesliga",
						"slug": "bundesliga",
						"primaryColorHex": "#b80a0c",
						"secondaryColorHex": "#eb544a",
						"category": {
							"name": "Austria",
							"slug": "austria",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 17,
							"country": {
								"alpha2": "AT",
								"alpha3": "AUT",
								"name": "Austria"
							},
							"flag": "austria",
							"alpha2": "AT"
						},
						"userCount": 37052,
						"id": 45,
						"country": {},
						"crowdsourcingEnabled": false,
						"hasPerformanceGraphFeature": false,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 288,
					"id": 29
				},
				"season": {
					"name": "Bundesliga 24/25",
					"year": "24/25",
					"editor": false,
					"id": 62629
				},
				"roundInfo": {
					"round": 6
				},
				"customId": "bQsdU",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 3,
				"homeTeam": {
					"name": "Austria Wien",
					"slug": "austria-wien",
					"shortName": "Austria Wien",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 20009,
					"nameCode": "FAK",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 2203,
					"country": {
						"alpha2": "AT",
						"alpha3": "AUT",
						"name": "Austria"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "اوستريا فيينا",
							"ru": "Аустрия Вена"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "SK Sturm Graz",
					"slug": "sk-sturm-graz",
					"shortName": "Sturm",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 74952,
					"nameCode": "STU",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 2051,
					"country": {
						"alpha2": "AT",
						"alpha3": "AUT",
						"name": "Austria"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "إس كيه سترم غراز",
							"ru": "Штурм Грац"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 2,
					"display": 2,
					"period1": 0,
					"period2": 2,
					"normaltime": 2
				},
				"awayScore": {
					"current": 2,
					"display": 2,
					"period1": 2,
					"period2": 0,
					"normaltime": 2
				},
				"time": {
					"injuryTime1": 2,
					"injuryTime2": 4,
					"currentPeriodStartTimestamp": 1727288597
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727288599
				},
				"hasGlobalHighlights": false,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12855334,
				"awayRedCards": 2,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727281800,
				"slug": "austria-wien-sk-sturm-graz",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Primera División",
					"slug": "primera-division",
					"category": {
						"name": "Chile",
						"slug": "chile",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 49,
						"country": {
							"alpha2": "CL",
							"alpha3": "CHL",
							"name": "Chile"
						},
						"flag": "chile",
						"alpha2": "CL"
					},
					"uniqueTournament": {
						"name": "Chilean Primera División",
						"slug": "primera-division",
						"category": {
							"name": "Chile",
							"slug": "chile",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 49,
							"country": {
								"alpha2": "CL",
								"alpha3": "CHL",
								"name": "Chile"
							},
							"flag": "chile",
							"alpha2": "CL"
						},
						"userCount": 25447,
						"id": 11653,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 268,
					"id": 64475
				},
				"season": {
					"name": "Primera División 2024",
					"year": "2024",
					"editor": false,
					"id": 57883
				},
				"roundInfo": {
					"round": 25
				},
				"customId": "hnbsWwn",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "Palestino",
					"slug": "palestino",
					"shortName": "Palestino",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 17542,
					"nameCode": "PAL",
					"national": false,
					"type": 0,
					"id": 3157,
					"country": {
						"alpha2": "CL",
						"alpha3": "CHL",
						"name": "Chile"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Палестино"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Deportes Iquique",
					"slug": "deportes-iquique",
					"shortName": "Iquique",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 7077,
					"nameCode": "IQU",
					"national": false,
					"type": 0,
					"id": 33596,
					"country": {
						"alpha2": "CL",
						"alpha3": "CHL",
						"name": "Chile"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "ديبورتيز إيكوك",
							"ru": "Муниципал Икике"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 2,
					"display": 2,
					"period1": 2,
					"period2": 0,
					"normaltime": 2
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"injuryTime1": 5,
					"injuryTime2": 7,
					"currentPeriodStartTimestamp": 1727208123
				},
				"changes": {
					"changes": [
						"time.currentPeriodStart",
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime"
					],
					"changeTimestamp": 1727208128
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12021781,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727200800,
				"slug": "deportes-iquique-palestino",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Primera División",
					"slug": "primera-division",
					"category": {
						"name": "Chile",
						"slug": "chile",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 49,
						"country": {
							"alpha2": "CL",
							"alpha3": "CHL",
							"name": "Chile"
						},
						"flag": "chile",
						"alpha2": "CL"
					},
					"uniqueTournament": {
						"name": "Chilean Primera División",
						"slug": "primera-division",
						"category": {
							"name": "Chile",
							"slug": "chile",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 49,
							"country": {
								"alpha2": "CL",
								"alpha3": "CHL",
								"name": "Chile"
							},
							"flag": "chile",
							"alpha2": "CL"
						},
						"userCount": 25447,
						"id": 11653,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 268,
					"id": 64475
				},
				"season": {
					"name": "Primera División 2024",
					"year": "2024",
					"editor": false,
					"id": 57883
				},
				"roundInfo": {
					"round": 25
				},
				"customId": "jnbsEPc",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "Cobreloa",
					"slug": "cobreloa",
					"shortName": "Cobreloa",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 7420,
					"nameCode": "COC",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 3159,
					"country": {
						"alpha2": "CL",
						"alpha3": "CHL",
						"name": "Chile"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Кобрелоа Калама"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Ñublense",
					"slug": "nublense",
					"shortName": "Ñublense",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 12330,
					"nameCode": "NUB",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 7029,
					"country": {
						"alpha2": "CL",
						"alpha3": "CHL",
						"name": "Chile"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Нубленсе"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"awayScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"time": {
					"injuryTime1": 4,
					"injuryTime2": 8,
					"currentPeriodStartTimestamp": 1727217238
				},
				"changes": {
					"changes": [
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime"
					],
					"changeTimestamp": 1727217376
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12021778,
				"awayRedCards": 1,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727209800,
				"slug": "nublense-cobreloa",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Primera División",
					"slug": "primera-division",
					"category": {
						"name": "Chile",
						"slug": "chile",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 49,
						"country": {
							"alpha2": "CL",
							"alpha3": "CHL",
							"name": "Chile"
						},
						"flag": "chile",
						"alpha2": "CL"
					},
					"uniqueTournament": {
						"name": "Chilean Primera División",
						"slug": "primera-division",
						"category": {
							"name": "Chile",
							"slug": "chile",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 49,
							"country": {
								"alpha2": "CL",
								"alpha3": "CHL",
								"name": "Chile"
							},
							"flag": "chile",
							"alpha2": "CL"
						},
						"userCount": 25447,
						"id": 11653,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 268,
					"id": 64475
				},
				"season": {
					"name": "Primera División 2024",
					"year": "2024",
					"editor": false,
					"id": 57883
				},
				"roundInfo": {
					"round": 25
				},
				"customId": "pnbsHac",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 3,
				"homeTeam": {
					"name": "Coquimbo Unido",
					"slug": "coquimbo-unido",
					"shortName": "Coquimbo Unido",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 10428,
					"nameCode": "COQ",
					"national": false,
					"type": 0,
					"id": 3165,
					"country": {
						"alpha2": "CL",
						"alpha3": "CHL",
						"name": "Chile"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "كوكويمبو يونيدو",
							"ru": "Кокимбо Унидо"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Everton de Viña del Mar",
					"slug": "everton-de-vina-del-mar",
					"shortName": "Everton",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 8094,
					"nameCode": "EVT",
					"national": false,
					"type": 0,
					"id": 5032,
					"country": {
						"alpha2": "CL",
						"alpha3": "CHL",
						"name": "Chile"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Эвертон Вина Дел Мар"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 2,
					"display": 2,
					"period1": 0,
					"period2": 2,
					"normaltime": 2
				},
				"awayScore": {
					"current": 2,
					"display": 2,
					"period1": 1,
					"period2": 1,
					"normaltime": 2
				},
				"time": {
					"injuryTime1": 3,
					"injuryTime2": 7,
					"currentPeriodStartTimestamp": 1727226067
				},
				"changes": {
					"changes": [
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime"
					],
					"changeTimestamp": 1727226225
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12021780,
				"homeRedCards": 1,
				"awayRedCards": 1,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727218800,
				"slug": "everton-de-vina-del-mar-coquimbo-unido",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Primera División",
					"slug": "primera-division",
					"category": {
						"name": "Chile",
						"slug": "chile",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 49,
						"country": {
							"alpha2": "CL",
							"alpha3": "CHL",
							"name": "Chile"
						},
						"flag": "chile",
						"alpha2": "CL"
					},
					"uniqueTournament": {
						"name": "Chilean Primera División",
						"slug": "primera-division",
						"category": {
							"name": "Chile",
							"slug": "chile",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 49,
							"country": {
								"alpha2": "CL",
								"alpha3": "CHL",
								"name": "Chile"
							},
							"flag": "chile",
							"alpha2": "CL"
						},
						"userCount": 25447,
						"id": 11653,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 268,
					"id": 64475
				},
				"season": {
					"name": "Primera División 2024",
					"year": "2024",
					"editor": false,
					"id": 57883
				},
				"roundInfo": {
					"round": 25
				},
				"customId": "lnbsonb",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "Universidad de Chile",
					"slug": "universidad-de-chile",
					"shortName": "Universidad de Chile",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 27805,
					"nameCode": "UCH",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 3161,
					"country": {
						"alpha2": "CL",
						"alpha3": "CHL",
						"name": "Chile"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "ليونيفيرسيداد دي شيلي",
							"ru": "Универсидад де Чили"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Huachipato",
					"slug": "huachipato",
					"shortName": "Huachipato",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 13391,
					"nameCode": "HUA",
					"national": false,
					"type": 0,
					"id": 3164,
					"country": {
						"alpha2": "CL",
						"alpha3": "CHL",
						"name": "Chile"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "هواتشيباتو",
							"ru": "Хуачипато"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 2,
					"display": 2,
					"period1": 1,
					"period2": 1,
					"normaltime": 2
				},
				"awayScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"time": {
					"injuryTime1": 4,
					"injuryTime2": 7,
					"currentPeriodStartTimestamp": 1727225904
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727225908
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12021777,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727218800,
				"slug": "huachipato-universidad-de-chile",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Primera División",
					"slug": "primera-division",
					"category": {
						"name": "Chile",
						"slug": "chile",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 49,
						"country": {
							"alpha2": "CL",
							"alpha3": "CHL",
							"name": "Chile"
						},
						"flag": "chile",
						"alpha2": "CL"
					},
					"uniqueTournament": {
						"name": "Chilean Primera División",
						"slug": "primera-division",
						"category": {
							"name": "Chile",
							"slug": "chile",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 49,
							"country": {
								"alpha2": "CL",
								"alpha3": "CHL",
								"name": "Chile"
							},
							"flag": "chile",
							"alpha2": "CL"
						},
						"userCount": 25447,
						"id": 11653,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 268,
					"id": 64475
				},
				"season": {
					"name": "Primera División 2024",
					"year": "2024",
					"editor": false,
					"id": 57883
				},
				"roundInfo": {
					"round": 25
				},
				"customId": "mnbsrnb",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "Cobresal",
					"slug": "cobresal",
					"shortName": "Cobresal",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 10860,
					"nameCode": "COB",
					"national": false,
					"type": 0,
					"id": 3167,
					"country": {
						"alpha2": "CL",
						"alpha3": "CHL",
						"name": "Chile"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "كوبريسال",
							"ru": "Кобресал"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Audax Italiano",
					"slug": "audax-italiano",
					"shortName": "Audax Italiano",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 8815,
					"nameCode": "AUD",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 3162,
					"country": {
						"alpha2": "CL",
						"alpha3": "CHL",
						"name": "Chile"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "أوداكس إيتاليانو",
							"ru": "Аудакс Италиано"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"awayScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"time": {
					"injuryTime1": 3,
					"injuryTime2": 8,
					"currentPeriodStartTimestamp": 1727294435
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727294437
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12021789,
				"homeRedCards": 1,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727287200,
				"slug": "cobresal-audax-italiano",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Primera División",
					"slug": "primera-division",
					"category": {
						"name": "Chile",
						"slug": "chile",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 49,
						"country": {
							"alpha2": "CL",
							"alpha3": "CHL",
							"name": "Chile"
						},
						"flag": "chile",
						"alpha2": "CL"
					},
					"uniqueTournament": {
						"name": "Chilean Primera División",
						"slug": "primera-division",
						"category": {
							"name": "Chile",
							"slug": "chile",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 49,
							"country": {
								"alpha2": "CL",
								"alpha3": "CHL",
								"name": "Chile"
							},
							"flag": "chile",
							"alpha2": "CL"
						},
						"userCount": 25447,
						"id": 11653,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 268,
					"id": 64475
				},
				"season": {
					"name": "Primera División 2024",
					"year": "2024",
					"editor": false,
					"id": 57883
				},
				"roundInfo": {
					"round": 25
				},
				"customId": "dnbsnnb",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "Unión Española",
					"slug": "union-espanola",
					"shortName": "Unión Española",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 9221,
					"nameCode": "ESP",
					"national": false,
					"type": 0,
					"id": 3153,
					"country": {
						"alpha2": "CL",
						"alpha3": "CHL",
						"name": "Chile"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Юнион Эспаньола"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "O'Higgins",
					"slug": "ohiggins",
					"shortName": "O'Higgins",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 5690,
					"nameCode": "OHF",
					"national": false,
					"type": 0,
					"id": 3163,
					"country": {
						"alpha2": "CL",
						"alpha3": "CHL",
						"name": "Chile"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "О´Хиггинс"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"awayScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"time": {
					"injuryTime1": 3,
					"injuryTime2": 7,
					"currentPeriodStartTimestamp": 1727305296
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727305300
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12021788,
				"awayRedCards": 1,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727298000,
				"slug": "ohiggins-union-espanola",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Primera División",
					"slug": "primera-division",
					"category": {
						"name": "Chile",
						"slug": "chile",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 49,
						"country": {
							"alpha2": "CL",
							"alpha3": "CHL",
							"name": "Chile"
						},
						"flag": "chile",
						"alpha2": "CL"
					},
					"uniqueTournament": {
						"name": "Chilean Primera División",
						"slug": "primera-division",
						"category": {
							"name": "Chile",
							"slug": "chile",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 49,
							"country": {
								"alpha2": "CL",
								"alpha3": "CHL",
								"name": "Chile"
							},
							"flag": "chile",
							"alpha2": "CL"
						},
						"userCount": 25447,
						"id": 11653,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 268,
					"id": 64475
				},
				"season": {
					"name": "Primera División 2024",
					"year": "2024",
					"editor": false,
					"id": 57883
				},
				"roundInfo": {
					"round": 25
				},
				"customId": "bnbsgPK",
				"status": {
					"code": 7,
					"description": "2nd half",
					"type": "inprogress"
				},
				"homeTeam": {
					"name": "Universidad Católica",
					"slug": "universidad-catolica",
					"shortName": "Universidad Católica",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 21763,
					"nameCode": "UC",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 3151,
					"country": {
						"alpha2": "CL",
						"alpha3": "CHL",
						"name": "Chile"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Универсидад Католика"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Deportes Copiapó",
					"slug": "deportes-copiapo",
					"shortName": "Deportes Copiapó",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 4790,
					"nameCode": "COP",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 89506,
					"country": {
						"alpha2": "CL",
						"alpha3": "CHL",
						"name": "Chile"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Депортес Копьяпо"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 1,
					"display": 1,
					"period1": 1
				},
				"awayScore": {
					"current": 1,
					"display": 1,
					"period1": 1
				},
				"time": {
					"injuryTime1": 4,
					"initial": 2700,
					"max": 5400,
					"extra": 540,
					"currentPeriodStartTimestamp": 1727310872
				},
				"changes": {
					"changes": [
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727311365
				},
				"hasGlobalHighlights": false,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12021786,
				"awayRedCards": 1,
				"statusTime": {
					"prefix": "",
					"initial": 2700,
					"max": 5400,
					"timestamp": 1727310872,
					"extra": 540
				},
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727307000,
				"slug": "deportes-copiapo-universidad-catolica",
				"lastPeriod": "period2",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Primera A, Clausura",
					"slug": "primera-a-clausura",
					"category": {
						"name": "Colombia",
						"slug": "colombia",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 274,
						"country": {
							"alpha2": "CO",
							"alpha3": "COL",
							"name": "Colombia"
						},
						"flag": "colombia",
						"alpha2": "CO"
					},
					"uniqueTournament": {
						"name": "Primera A, Clausura",
						"slug": "primera-a-clausura",
						"category": {
							"name": "Colombia",
							"slug": "colombia",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 274,
							"country": {
								"alpha2": "CO",
								"alpha3": "COL",
								"name": "Colombia"
							},
							"flag": "colombia",
							"alpha2": "CO"
						},
						"userCount": 25634,
						"id": 11536,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 264,
					"id": 19236
				},
				"season": {
					"name": "Primera A, Clausura 2024",
					"year": "2024",
					"editor": false,
					"seasonCoverageInfo": {},
					"id": 63819
				},
				"roundInfo": {
					"round": 11
				},
				"customId": "rxcsvMK",
				"status": {
					"code": 0,
					"description": "Not started",
					"type": "notstarted"
				},
				"homeTeam": {
					"name": "Millonarios",
					"slug": "millonarios",
					"shortName": "Millonarios",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 59488,
					"nameCode": "MIL",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 6117,
					"country": {
						"alpha2": "CO",
						"alpha3": "COL",
						"name": "Colombia"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "النادى الرياضي ميلوناريوس",
							"ru": "ФК Мильонариос"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Jaguares de Córdoba",
					"slug": "jaguares-de-cordoba",
					"shortName": "Jaguares",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 7752,
					"nameCode": "JAG",
					"national": false,
					"type": 0,
					"id": 89370,
					"country": {
						"alpha2": "CO",
						"alpha3": "COL",
						"name": "Colombia"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Жагуарес де Кордоба"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {},
				"awayScore": {},
				"time": {},
				"changes": {
					"changeTimestamp": 0
				},
				"hasGlobalHighlights": false,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12857610,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727314200,
				"slug": "jaguares-de-cordoba-millonarios",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Ekstraklasa",
					"slug": "ekstraklasa",
					"category": {
						"name": "Poland",
						"slug": "poland",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 47,
						"country": {
							"alpha2": "PL",
							"alpha3": "POL",
							"name": "Poland"
						},
						"flag": "poland",
						"alpha2": "PL"
					},
					"uniqueTournament": {
						"name": "Ekstraklasa",
						"slug": "ekstraklasa",
						"category": {
							"name": "Poland",
							"slug": "poland",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 47,
							"country": {
								"alpha2": "PL",
								"alpha3": "POL",
								"name": "Poland"
							},
							"flag": "poland",
							"alpha2": "PL"
						},
						"userCount": 39934,
						"id": 202,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 238,
					"id": 64
				},
				"season": {
					"name": "Ekstraklasa 24/25",
					"year": "24/25",
					"editor": false,
					"id": 61236
				},
				"roundInfo": {
					"round": 4
				},
				"customId": "Qddspid",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "Motor Lublin",
					"slug": "motor-lublin",
					"shortName": "Motor",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 6998,
					"nameCode": "MOT",
					"national": false,
					"type": 0,
					"id": 7915,
					"country": {
						"alpha2": "PL",
						"alpha3": "POL",
						"name": "Poland"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Мотор Люблин"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Jagiellonia Białystok",
					"slug": "jagiellonia-bialystok",
					"shortName": "Jagiellonia",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 24560,
					"nameCode": "JAG",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 7691,
					"country": {
						"alpha2": "PL",
						"alpha3": "POL",
						"name": "Poland"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "جاجيلونيا بياليستوك",
							"ru": "Ягеллония Билысток"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"awayScore": {
					"current": 2,
					"display": 2,
					"period1": 1,
					"period2": 1,
					"normaltime": 2
				},
				"time": {
					"injuryTime1": 5,
					"injuryTime2": 4,
					"currentPeriodStartTimestamp": 1727287621
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727290573
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12869936,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727283600,
				"slug": "motor-lublin-jagiellonia-bialystok",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "League One",
					"slug": "league-one",
					"category": {
						"name": "England",
						"slug": "england",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 1,
						"country": {
							"alpha2": "EN",
							"alpha3": "ENG",
							"name": "England"
						},
						"flag": "england",
						"alpha2": "EN"
					},
					"uniqueTournament": {
						"name": "League One",
						"slug": "league-one",
						"category": {
							"name": "England",
							"slug": "england",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 1,
							"country": {
								"alpha2": "EN",
								"alpha3": "ENG",
								"name": "England"
							},
							"flag": "england",
							"alpha2": "EN"
						},
						"userCount": 36041,
						"id": 24,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 224,
					"id": 3
				},
				"season": {
					"name": "League One 24/25",
					"year": "24/25",
					"editor": false,
					"id": 61959
				},
				"roundInfo": {
					"round": 5
				},
				"customId": "jbsrb",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "Huddersfield Town",
					"slug": "huddersfield-town",
					"shortName": "Huddersfield",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 22222,
					"nameCode": "HUD",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 59,
					"country": {
						"alpha2": "EN",
						"alpha3": "ENG",
						"name": "England"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "هيديرسفيلد تاون",
							"ru": "Хаддерсфилд Таун"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Blackpool",
					"slug": "blackpool",
					"shortName": "Blackpool",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 19035,
					"nameCode": "BLP",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 67,
					"country": {
						"alpha2": "EN",
						"alpha3": "ENG",
						"name": "England"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "بلاكبوول",
							"ru": "Блэкпул"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"awayScore": {
					"current": 2,
					"display": 2,
					"period1": 2,
					"period2": 0,
					"normaltime": 2
				},
				"time": {
					"injuryTime1": 5,
					"injuryTime2": 5,
					"currentPeriodStartTimestamp": 1727207545
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727210569
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12860793,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727203500,
				"slug": "blackpool-huddersfield-town",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "League One",
					"slug": "league-one",
					"category": {
						"name": "England",
						"slug": "england",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 1,
						"country": {
							"alpha2": "EN",
							"alpha3": "ENG",
							"name": "England"
						},
						"flag": "england",
						"alpha2": "EN"
					},
					"uniqueTournament": {
						"name": "League One",
						"slug": "league-one",
						"category": {
							"name": "England",
							"slug": "england",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 1,
							"country": {
								"alpha2": "EN",
								"alpha3": "ENG",
								"name": "England"
							},
							"flag": "england",
							"alpha2": "EN"
						},
						"userCount": 36041,
						"id": 24,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 224,
					"id": 3
				},
				"season": {
					"name": "League One 24/25",
					"year": "24/25",
					"editor": false,
					"id": 61959
				},
				"roundInfo": {
					"round": 5
				},
				"customId": "ebsIb",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 3,
				"homeTeam": {
					"name": "Leyton Orient",
					"slug": "leyton-orient",
					"shortName": "Leyton Orient",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 11876,
					"nameCode": "LEY",
					"national": false,
					"type": 0,
					"id": 83,
					"country": {
						"alpha2": "EN",
						"alpha3": "ENG",
						"name": "England"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Лейтон Ориент"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Peterborough United",
					"slug": "peterborough-united",
					"shortName": "Peterborough Utd",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 17187,
					"nameCode": "PET",
					"national": false,
					"type": 0,
					"id": 54,
					"country": {
						"alpha2": "EN",
						"alpha3": "ENG",
						"name": "England"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "بيتربورو يونايتد",
							"ru": "Питерборо Юнайтед"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 2,
					"display": 2,
					"period1": 1,
					"period2": 1,
					"normaltime": 2
				},
				"awayScore": {
					"current": 2,
					"display": 2,
					"period1": 2,
					"period2": 0,
					"normaltime": 2
				},
				"time": {
					"injuryTime1": 3,
					"injuryTime2": 4,
					"currentPeriodStartTimestamp": 1727207614
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727210612
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12848270,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727203500,
				"slug": "leyton-orient-peterborough-united",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "League One",
					"slug": "league-one",
					"category": {
						"name": "England",
						"slug": "england",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 1,
						"country": {
							"alpha2": "EN",
							"alpha3": "ENG",
							"name": "England"
						},
						"flag": "england",
						"alpha2": "EN"
					},
					"uniqueTournament": {
						"name": "League One",
						"slug": "league-one",
						"category": {
							"name": "England",
							"slug": "england",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 1,
							"country": {
								"alpha2": "EN",
								"alpha3": "ENG",
								"name": "England"
							},
							"flag": "england",
							"alpha2": "EN"
						},
						"userCount": 36041,
						"id": 24,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 224,
					"id": 3
				},
				"season": {
					"name": "League One 24/25",
					"year": "24/25",
					"editor": false,
					"id": 61959
				},
				"roundInfo": {
					"round": 5
				},
				"customId": "ZsIc",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 3,
				"homeTeam": {
					"name": "Wigan Athletic",
					"slug": "wigan-athletic",
					"shortName": "Wigan",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 16675,
					"nameCode": "WIG",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 49,
					"country": {
						"alpha2": "EN",
						"alpha3": "ENG",
						"name": "England"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "ويجان اثليتيك",
							"ru": "Уиган Атлетик"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Stevenage",
					"slug": "stevenage",
					"shortName": "Stevenage",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 11453,
					"nameCode": "STE",
					"national": false,
					"type": 0,
					"id": 133,
					"country": {
						"alpha2": "EN",
						"alpha3": "ENG",
						"name": "England"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Стивенэйдж"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"injuryTime1": 2,
					"injuryTime2": 3,
					"currentPeriodStartTimestamp": 1727207280
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727210186
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12860794,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727203500,
				"slug": "stevenage-wigan-athletic",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Super League",
					"slug": "super-league",
					"category": {
						"name": "India",
						"slug": "india",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 352,
						"country": {
							"alpha2": "IN",
							"alpha3": "IND",
							"name": "India"
						},
						"flag": "india",
						"alpha2": "IN"
					},
					"uniqueTournament": {
						"name": "Indian Super League",
						"slug": "indian-super-league",
						"category": {
							"name": "India",
							"slug": "india",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 352,
							"country": {
								"alpha2": "IN",
								"alpha3": "IND",
								"name": "India"
							},
							"flag": "india",
							"alpha2": "IN"
						},
						"userCount": 25611,
						"id": 1900,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 200,
					"id": 38566
				},
				"season": {
					"name": "Indian Super League 24/25",
					"year": "24/25",
					"editor": false,
					"id": 65961
				},
				"roundInfo": {
					"round": 3
				},
				"customId": "lnRbsPLHc",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "Punjab FC",
					"slug": "punjab-fc",
					"shortName": "Punjab",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 6702,
					"nameCode": "PUN",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 230661,
					"country": {
						"alpha2": "IN",
						"alpha3": "IND",
						"name": "India"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Минерва"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Hyderabad FC",
					"slug": "hyderabad-fc",
					"shortName": "Hyderabad",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 8299,
					"nameCode": "HYD",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 331840,
					"country": {
						"alpha2": "IN",
						"alpha3": "IND",
						"name": "India"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Хайдарабад"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 2,
					"display": 2,
					"period1": 1,
					"period2": 1,
					"normaltime": 2
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"injuryTime1": 3,
					"injuryTime2": 4,
					"currentPeriodStartTimestamp": 1727276615
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727279581
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12744943,
				"awayRedCards": 1,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727272800,
				"slug": "hyderabad-fc-punjab-fc",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Primera Division, Clausura",
					"slug": "liga-1-clausura",
					"category": {
						"name": "Peru",
						"slug": "peru",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 20,
						"country": {
							"alpha2": "PE",
							"alpha3": "PER",
							"name": "Peru"
						},
						"flag": "peru",
						"alpha2": "PE"
					},
					"uniqueTournament": {
						"name": "Peruvian Primera División",
						"slug": "liga-1",
						"category": {
							"name": "Peru",
							"slug": "peru",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 20,
							"country": {
								"alpha2": "PE",
								"alpha3": "PER",
								"name": "Peru"
							},
							"flag": "peru",
							"alpha2": "PE"
						},
						"userCount": 29985,
						"id": 406,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 189,
					"id": 34468
				},
				"season": {
					"name": "Primera Division 2024",
					"year": "2024",
					"editor": false,
					"id": 57741
				},
				"roundInfo": {
					"round": 12
				},
				"customId": "ehKsVUac",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "Universidad Técnica de Cajamarca",
					"slug": "universidad-tecnica-de-cajamarca",
					"shortName": "UTC",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 7370,
					"nameCode": "CAJ",
					"national": false,
					"type": 0,
					"id": 87854,
					"country": {
						"alpha2": "PE",
						"alpha3": "PER",
						"name": "Peru"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "УТК де Кахамарка"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Carlos A. Mannucci",
					"slug": "carlos-a-mannucci",
					"shortName": "Carlos Mannucci",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 5270,
					"nameCode": "MAN",
					"national": false,
					"type": 0,
					"id": 252245,
					"country": {
						"alpha2": "PE",
						"alpha3": "PER",
						"name": "Peru"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					}
				},
				"homeScore": {
					"current": 2,
					"display": 2,
					"period1": 1,
					"period2": 1,
					"normaltime": 2
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"injuryTime1": 2,
					"injuryTime2": 6,
					"currentPeriodStartTimestamp": 1727214841
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727214844
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12702525,
				"awayRedCards": 1,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727208000,
				"slug": "carlos-mannucci-universidad-tecnica-de-cajamarca",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Allsvenskan",
					"slug": "allsvenskan",
					"category": {
						"name": "Sweden",
						"slug": "sweden",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 9,
						"country": {
							"alpha2": "SE",
							"alpha3": "SWE",
							"name": "Sweden"
						},
						"flag": "sweden",
						"alpha2": "SE"
					},
					"uniqueTournament": {
						"name": "Allsvenskan",
						"slug": "allsvenskan",
						"primaryColorHex": "#d38509",
						"secondaryColorHex": "#212759",
						"category": {
							"name": "Sweden",
							"slug": "sweden",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 9,
							"country": {
								"alpha2": "SE",
								"alpha3": "SWE",
								"name": "Sweden"
							},
							"flag": "sweden",
							"alpha2": "SE"
						},
						"userCount": 35975,
						"id": 40,
						"country": {},
						"crowdsourcingEnabled": false,
						"hasPerformanceGraphFeature": true,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 163,
					"id": 24
				},
				"season": {
					"name": "Allsvenskan 2024",
					"year": "2024",
					"editor": false,
					"id": 57284
				},
				"roundInfo": {
					"round": 24
				},
				"customId": "jKsMK",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "Djurgårdens IF",
					"slug": "djurgardens-if",
					"shortName": "Djurgården",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 45905,
					"nameCode": "DIF",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 1759,
					"country": {
						"alpha2": "SE",
						"alpha3": "SWE",
						"name": "Sweden"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "ديورجادنز",
							"ru": "ФК Юргорден"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "IF Brommapojkarna",
					"slug": "if-brommapojkarna",
					"shortName": "Brommapojkarna",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 9970,
					"nameCode": "BP",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 1787,
					"country": {
						"alpha2": "SE",
						"alpha3": "SWE",
						"name": "Sweden"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "اي اف برومابوجكارنا",
							"ru": "ИФ Броммапойкарна"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 2,
					"display": 2,
					"period1": 1,
					"period2": 1,
					"normaltime": 2
				},
				"awayScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"time": {
					"injuryTime1": 3,
					"injuryTime2": 8,
					"currentPeriodStartTimestamp": 1727290670
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727290672
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 11907411,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727283600,
				"slug": "if-brommapojkarna-djurgardens-if",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Allsvenskan",
					"slug": "allsvenskan",
					"category": {
						"name": "Sweden",
						"slug": "sweden",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 9,
						"country": {
							"alpha2": "SE",
							"alpha3": "SWE",
							"name": "Sweden"
						},
						"flag": "sweden",
						"alpha2": "SE"
					},
					"uniqueTournament": {
						"name": "Allsvenskan",
						"slug": "allsvenskan",
						"primaryColorHex": "#d38509",
						"secondaryColorHex": "#212759",
						"category": {
							"name": "Sweden",
							"slug": "sweden",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 9,
							"country": {
								"alpha2": "SE",
								"alpha3": "SWE",
								"name": "Sweden"
							},
							"flag": "sweden",
							"alpha2": "SE"
						},
						"userCount": 35975,
						"id": 40,
						"country": {},
						"crowdsourcingEnabled": false,
						"hasPerformanceGraphFeature": true,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 163,
					"id": 24
				},
				"season": {
					"name": "Allsvenskan 2024",
					"year": "2024",
					"editor": false,
					"id": 57284
				},
				"roundInfo": {
					"round": 24
				},
				"customId": "oKsTK",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "IK Sirius",
					"slug": "ik-sirius",
					"shortName": "Sirius",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 10087,
					"nameCode": "IKS",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 1793,
					"country": {
						"alpha2": "SE",
						"alpha3": "SWE",
						"name": "Sweden"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "إف كيه سيريوس",
							"ru": "ИК Сириус Фк"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "AIK",
					"slug": "aik",
					"shortName": "AIK",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 25505,
					"nameCode": "AIK",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 1764,
					"country": {
						"alpha2": "SE",
						"alpha3": "SWE",
						"name": "Sweden"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "أيك سولنا",
							"ru": "АИК"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"awayScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"time": {
					"injuryTime1": 1,
					"injuryTime2": 7,
					"currentPeriodStartTimestamp": 1727290810
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727290813
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 11907416,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727283600,
				"slug": "ik-sirius-aik",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Allsvenskan",
					"slug": "allsvenskan",
					"category": {
						"name": "Sweden",
						"slug": "sweden",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 9,
						"country": {
							"alpha2": "SE",
							"alpha3": "SWE",
							"name": "Sweden"
						},
						"flag": "sweden",
						"alpha2": "SE"
					},
					"uniqueTournament": {
						"name": "Allsvenskan",
						"slug": "allsvenskan",
						"primaryColorHex": "#d38509",
						"secondaryColorHex": "#212759",
						"category": {
							"name": "Sweden",
							"slug": "sweden",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 9,
							"country": {
								"alpha2": "SE",
								"alpha3": "SWE",
								"name": "Sweden"
							},
							"flag": "sweden",
							"alpha2": "SE"
						},
						"userCount": 35975,
						"id": 40,
						"country": {},
						"crowdsourcingEnabled": false,
						"hasPerformanceGraphFeature": true,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 163,
					"id": 24
				},
				"season": {
					"name": "Allsvenskan 2024",
					"year": "2024",
					"editor": false,
					"id": 57284
				},
				"roundInfo": {
					"round": 24
				},
				"customId": "IKsRL",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 3,
				"homeTeam": {
					"name": "Mjällby AIF",
					"slug": "mjallby-aif",
					"shortName": "Mjällby",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 11328,
					"nameCode": "MAIF",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 1783,
					"country": {
						"alpha2": "SE",
						"alpha3": "SWE",
						"name": "Sweden"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Мяллби АИФ"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "IFK Värnamo",
					"slug": "ifk-varnamo",
					"shortName": "Värnamo",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 8655,
					"nameCode": "VMO",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 1842,
					"country": {
						"alpha2": "SE",
						"alpha3": "SWE",
						"name": "Sweden"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					}
				},
				"homeScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"awayScore": {
					"current": 1,
					"display": 1,
					"period1": 1,
					"period2": 0,
					"normaltime": 1
				},
				"time": {
					"injuryTime2": 4,
					"currentPeriodStartTimestamp": 1727290266
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727290270
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 11907417,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727283600,
				"slug": "ifk-varnamo-mjallby-aif",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Super League",
					"slug": "super-league",
					"category": {
						"name": "Switzerland",
						"slug": "switzerland",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 25,
						"country": {
							"alpha2": "CH",
							"alpha3": "CHE",
							"name": "Switzerland"
						},
						"flag": "switzerland",
						"alpha2": "CH"
					},
					"uniqueTournament": {
						"name": "Swiss Super League",
						"slug": "super-league",
						"category": {
							"name": "Switzerland",
							"slug": "switzerland",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 25,
							"country": {
								"alpha2": "CH",
								"alpha3": "CHE",
								"name": "Switzerland"
							},
							"flag": "switzerland",
							"alpha2": "CH"
						},
						"userCount": 42873,
						"id": 215,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 161,
					"id": 1060
				},
				"season": {
					"name": "Super League 24/25",
					"year": "24/25",
					"editor": false,
					"id": 61658
				},
				"roundInfo": {
					"round": 5
				},
				"customId": "RYsaZ",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "FC St. Gallen 1879",
					"slug": "fc-st-gallen-1879",
					"shortName": "St. Gallen",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 27921,
					"nameCode": "STG",
					"national": false,
					"type": 0,
					"id": 2442,
					"country": {
						"alpha2": "CH",
						"alpha3": "CHE",
						"name": "Switzerland"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "FC St. Gallen 1879",
							"ru": "Санкт-Галлен"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "FC Zürich",
					"slug": "fc-zurich",
					"shortName": "Zürich",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 44800,
					"nameCode": "FCZ",
					"national": false,
					"type": 0,
					"id": 2450,
					"country": {
						"alpha2": "CH",
						"alpha3": "CHE",
						"name": "Switzerland"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "زيورخ",
							"ru": "Цюрих"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 4,
					"display": 4,
					"period1": 1,
					"period2": 3,
					"normaltime": 4
				},
				"awayScore": {
					"current": 1,
					"display": 1,
					"period1": 1,
					"period2": 0,
					"normaltime": 1
				},
				"time": {
					"injuryTime1": 2,
					"injuryTime2": 4,
					"currentPeriodStartTimestamp": 1727206420
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727210440
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12719202,
				"awayRedCards": 1,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727202600,
				"slug": "fc-zurich-fc-st-gallen-1879",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Premiership",
					"slug": "premiership",
					"category": {
						"name": "South Africa",
						"slug": "south-africa",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 322,
						"country": {
							"alpha2": "ZA",
							"alpha3": "ZAF",
							"name": "South Africa"
						},
						"flag": "south-africa",
						"alpha2": "ZA"
					},
					"uniqueTournament": {
						"name": "South African Premier Division",
						"slug": "premiership",
						"category": {
							"name": "South Africa",
							"slug": "south-africa",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 322,
							"country": {
								"alpha2": "ZA",
								"alpha3": "ZAF",
								"name": "South Africa"
							},
							"flag": "south-africa",
							"alpha2": "ZA"
						},
						"userCount": 31342,
						"id": 358,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 159,
					"id": 3830
				},
				"season": {
					"name": "Premiership 24/25",
					"year": "24/25",
					"editor": false,
					"id": 65113
				},
				"roundInfo": {
					"round": 3
				},
				"customId": "tddscak",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "Orlando Pirates",
					"slug": "orlando-pirates",
					"shortName": "Orlando Pirates",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 82834,
					"nameCode": "ORL",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 7668,
					"country": {
						"alpha2": "ZA",
						"alpha3": "ZAF",
						"name": "South Africa"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Орландо Пайретс"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Polokwane City",
					"slug": "polokwane-city",
					"shortName": "Polokwane",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 5036,
					"nameCode": "POL",
					"national": false,
					"type": 0,
					"id": 25002,
					"country": {
						"alpha2": "ZA",
						"alpha3": "ZAF",
						"name": "South Africa"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "پولوكڢاني سيتي",
							"ru": "Полокване Сити"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 3,
					"display": 3,
					"period1": 0,
					"period2": 3,
					"normaltime": 3
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"injuryTime1": 1,
					"injuryTime2": 5,
					"currentPeriodStartTimestamp": 1727186676
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727189701
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12662036,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727182800,
				"slug": "polokwane-city-orlando-pirates",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Premiership",
					"slug": "premiership",
					"category": {
						"name": "South Africa",
						"slug": "south-africa",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 322,
						"country": {
							"alpha2": "ZA",
							"alpha3": "ZAF",
							"name": "South Africa"
						},
						"flag": "south-africa",
						"alpha2": "ZA"
					},
					"uniqueTournament": {
						"name": "South African Premier Division",
						"slug": "premiership",
						"category": {
							"name": "South Africa",
							"slug": "south-africa",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 322,
							"country": {
								"alpha2": "ZA",
								"alpha3": "ZAF",
								"name": "South Africa"
							},
							"flag": "south-africa",
							"alpha2": "ZA"
						},
						"userCount": 31342,
						"id": 358,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 159,
					"id": 3830
				},
				"season": {
					"name": "Premiership 24/25",
					"year": "24/25",
					"editor": false,
					"id": 65113
				},
				"roundInfo": {
					"round": 3
				},
				"customId": "pddsClfc",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "Mamelodi Sundowns",
					"slug": "mamelodi-sundowns",
					"shortName": "Sundowns",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 172661,
					"nameCode": "MAM",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 7665,
					"country": {
						"alpha2": "ZA",
						"alpha3": "ZAF",
						"name": "South Africa"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "ماميلودي سانداونز",
							"ru": "Мамелоди Сандаунс"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Marumo Gallants FC",
					"slug": "marumo-gallants-fc",
					"shortName": "Marumo Gallants FC",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 5247,
					"nameCode": "MGL",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 263077,
					"country": {
						"alpha2": "ZA",
						"alpha3": "ZAF",
						"name": "South Africa"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					}
				},
				"homeScore": {
					"current": 4,
					"display": 4,
					"period1": 2,
					"period2": 2,
					"normaltime": 4
				},
				"awayScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"time": {
					"injuryTime1": 1,
					"injuryTime2": 4,
					"currentPeriodStartTimestamp": 1727195747
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727198713
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12662043,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727191800,
				"slug": "marumo-gallants-fc-mamelodi-sundowns",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Premiership",
					"slug": "premiership",
					"category": {
						"name": "South Africa",
						"slug": "south-africa",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 322,
						"country": {
							"alpha2": "ZA",
							"alpha3": "ZAF",
							"name": "South Africa"
						},
						"flag": "south-africa",
						"alpha2": "ZA"
					},
					"uniqueTournament": {
						"name": "South African Premier Division",
						"slug": "premiership",
						"category": {
							"name": "South Africa",
							"slug": "south-africa",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 322,
							"country": {
								"alpha2": "ZA",
								"alpha3": "ZAF",
								"name": "South Africa"
							},
							"flag": "south-africa",
							"alpha2": "ZA"
						},
						"userCount": 31342,
						"id": 358,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 159,
					"id": 3830
				},
				"season": {
					"name": "Premiership 24/25",
					"year": "24/25",
					"editor": false,
					"id": 65113
				},
				"roundInfo": {
					"round": 3
				},
				"customId": "jddsElfc",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 3,
				"homeTeam": {
					"name": "Royal AM",
					"slug": "royal-am",
					"shortName": "Royal AM",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 6501,
					"nameCode": "ROY",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 7659,
					"country": {
						"alpha2": "ZA",
						"alpha3": "ZAF",
						"name": "South Africa"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Бломфонтейн Селтик"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Richards Bay FC",
					"slug": "richards-bay-fc",
					"shortName": "Richards Bay FC",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 5911,
					"nameCode": "RIC",
					"national": false,
					"type": 0,
					"id": 263079,
					"country": {
						"alpha2": "ZA",
						"alpha3": "ZAF",
						"name": "South Africa"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					}
				},
				"homeScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"injuryTime1": 3,
					"injuryTime2": 3,
					"currentPeriodStartTimestamp": 1727202971
				},
				"changes": {
					"changes": [
						"time.injuryTime2",
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727205879
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12662027,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727199000,
				"slug": "richards-bay-fc-royal-am",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Premiership",
					"slug": "premiership",
					"category": {
						"name": "South Africa",
						"slug": "south-africa",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 322,
						"country": {
							"alpha2": "ZA",
							"alpha3": "ZAF",
							"name": "South Africa"
						},
						"flag": "south-africa",
						"alpha2": "ZA"
					},
					"uniqueTournament": {
						"name": "South African Premier Division",
						"slug": "premiership",
						"category": {
							"name": "South Africa",
							"slug": "south-africa",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 322,
							"country": {
								"alpha2": "ZA",
								"alpha3": "ZAF",
								"name": "South Africa"
							},
							"flag": "south-africa",
							"alpha2": "ZA"
						},
						"userCount": 31342,
						"id": 358,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 159,
					"id": 3830
				},
				"season": {
					"name": "Premiership 24/25",
					"year": "24/25",
					"editor": false,
					"id": 65113
				},
				"roundInfo": {
					"round": 3
				},
				"customId": "fddsndd",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "AmaZulu FC",
					"slug": "amazulu-fc",
					"shortName": "AmaZulu",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 8416,
					"nameCode": "AMA",
					"national": false,
					"type": 0,
					"id": 7655,
					"country": {
						"alpha2": "ZA",
						"alpha3": "ZAF",
						"name": "South Africa"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "امازولا",
							"ru": "Амазулу"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Kaizer Chiefs",
					"slug": "kaizer-chiefs",
					"shortName": "Kaizer Chiefs",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 60633,
					"nameCode": "KAC",
					"national": false,
					"type": 0,
					"id": 7663,
					"country": {
						"alpha2": "ZA",
						"alpha3": "ZAF",
						"name": "South Africa"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "كايزر شيفس",
							"ru": "Кайзер Чифс"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"awayScore": {
					"current": 3,
					"display": 3,
					"period1": 3,
					"period2": 0,
					"normaltime": 3
				},
				"time": {
					"injuryTime1": 0,
					"injuryTime2": 4,
					"currentPeriodStartTimestamp": 1727289295
				},
				"changes": {
					"changes": [
						"time.injuryTime2",
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727292252
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12662026,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727285400,
				"slug": "kaizer-chiefs-amazulu-fc",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Premiership",
					"slug": "premiership",
					"category": {
						"name": "South Africa",
						"slug": "south-africa",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 322,
						"country": {
							"alpha2": "ZA",
							"alpha3": "ZAF",
							"name": "South Africa"
						},
						"flag": "south-africa",
						"alpha2": "ZA"
					},
					"uniqueTournament": {
						"name": "South African Premier Division",
						"slug": "premiership",
						"category": {
							"name": "South Africa",
							"slug": "south-africa",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 322,
							"country": {
								"alpha2": "ZA",
								"alpha3": "ZAF",
								"name": "South Africa"
							},
							"flag": "south-africa",
							"alpha2": "ZA"
						},
						"userCount": 31342,
						"id": 358,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 159,
					"id": 3830
				},
				"season": {
					"name": "Premiership 24/25",
					"year": "24/25",
					"editor": false,
					"id": 65113
				},
				"roundInfo": {
					"round": 3
				},
				"customId": "oddsUqL",
				"status": {
					"code": 90,
					"description": "Abandoned",
					"type": "canceled"
				},
				"homeTeam": {
					"name": "Lamontville Golden Arrows",
					"slug": "lamontville-golden-arrows",
					"shortName": "Golden Arrows",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 5069,
					"nameCode": "GAR",
					"national": false,
					"type": 0,
					"id": 7664,
					"country": {
						"alpha2": "ZA",
						"alpha3": "ZAF",
						"name": "South Africa"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "لامونتفيل جولدن اروز",
							"ru": "Лемонтвилль Голден Эрроуз"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Magesi FC",
					"slug": "magesi-fc",
					"shortName": "Magesi",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 1567,
					"nameCode": "MAG",
					"national": false,
					"type": 0,
					"id": 90844,
					"country": {
						"alpha2": "ZA",
						"alpha3": "ZAF",
						"name": "South Africa"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "نادي كرة القدم ماجيسي",
							"ru": "Магеси ФК"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"awayScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"time": {
					"injuryTime1": 1,
					"currentPeriodStartTimestamp": 1727289155
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727293477
				},
				"hasGlobalHighlights": false,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12662030,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727285400,
				"slug": "magesi-fc-lamontville-golden-arrows",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Premiership",
					"slug": "premiership",
					"category": {
						"name": "South Africa",
						"slug": "south-africa",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 322,
						"country": {
							"alpha2": "ZA",
							"alpha3": "ZAF",
							"name": "South Africa"
						},
						"flag": "south-africa",
						"alpha2": "ZA"
					},
					"uniqueTournament": {
						"name": "South African Premier Division",
						"slug": "premiership",
						"category": {
							"name": "South Africa",
							"slug": "south-africa",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 322,
							"country": {
								"alpha2": "ZA",
								"alpha3": "ZAF",
								"name": "South Africa"
							},
							"flag": "south-africa",
							"alpha2": "ZA"
						},
						"userCount": 31342,
						"id": 358,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 159,
					"id": 3830
				},
				"season": {
					"name": "Premiership 24/25",
					"year": "24/25",
					"editor": false,
					"id": 65113
				},
				"roundInfo": {
					"round": 3
				},
				"customId": "WtDsQBYc",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 3,
				"homeTeam": {
					"name": "Sekhukhune United",
					"slug": "sekhukhune-united",
					"shortName": "Sekhukhune United",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 6245,
					"nameCode": "SEK",
					"national": false,
					"type": 0,
					"id": 371341,
					"country": {
						"alpha2": "ZA",
						"alpha3": "ZAF",
						"name": "South Africa"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					}
				},
				"awayTeam": {
					"name": "Chippa United",
					"slug": "chippa-united",
					"shortName": "Chippa Utd",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 5337,
					"nameCode": "CHI",
					"national": false,
					"type": 0,
					"id": 70946,
					"country": {
						"alpha2": "ZA",
						"alpha3": "ZAF",
						"name": "South Africa"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Чиппа Юнайтед"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"awayScore": {
					"current": 1,
					"display": 1,
					"period1": 1,
					"period2": 0,
					"normaltime": 1
				},
				"time": {
					"injuryTime1": 5,
					"injuryTime2": 6,
					"currentPeriodStartTimestamp": 1727289461
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727292617
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12662029,
				"awayRedCards": 1,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727285400,
				"slug": "sekhukhune-united-chippa-united",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Premiership",
					"slug": "premiership",
					"category": {
						"name": "South Africa",
						"slug": "south-africa",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 322,
						"country": {
							"alpha2": "ZA",
							"alpha3": "ZAF",
							"name": "South Africa"
						},
						"flag": "south-africa",
						"alpha2": "ZA"
					},
					"uniqueTournament": {
						"name": "South African Premier Division",
						"slug": "premiership",
						"category": {
							"name": "South Africa",
							"slug": "south-africa",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 322,
							"country": {
								"alpha2": "ZA",
								"alpha3": "ZAF",
								"name": "South Africa"
							},
							"flag": "south-africa",
							"alpha2": "ZA"
						},
						"userCount": 31342,
						"id": 358,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 159,
					"id": 3830
				},
				"season": {
					"name": "Premiership 24/25",
					"year": "24/25",
					"editor": false,
					"id": 65113
				},
				"roundInfo": {
					"round": 3
				},
				"customId": "fwrsETQb",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "Stellenbosch",
					"slug": "stellenbosch",
					"shortName": "Stellenbosch",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 9813,
					"nameCode": "STB",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 43555,
					"country": {
						"alpha2": "ZA",
						"alpha3": "ZAF",
						"name": "South Africa"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Стелленбос"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Cape Town City FC",
					"slug": "cape-town-city-fc",
					"shortName": "Cape Town City",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 9104,
					"nameCode": "CTC",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 229679,
					"country": {
						"alpha2": "ZA",
						"alpha3": "ZAF",
						"name": "South Africa"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Кейптаун Сити ФК"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 3,
					"display": 3,
					"period1": 1,
					"period2": 2,
					"normaltime": 3
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"injuryTime1": 1,
					"injuryTime2": 4,
					"currentPeriodStartTimestamp": 1727289222
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"time.injuryTime2"
					],
					"changeTimestamp": 1727292172
				},
				"hasGlobalHighlights": false,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12662025,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727285400,
				"slug": "cape-town-city-fc-stellenbosch",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Premiership",
					"slug": "premiership",
					"category": {
						"name": "South Africa",
						"slug": "south-africa",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 322,
						"country": {
							"alpha2": "ZA",
							"alpha3": "ZAF",
							"name": "South Africa"
						},
						"flag": "south-africa",
						"alpha2": "ZA"
					},
					"uniqueTournament": {
						"name": "South African Premier Division",
						"slug": "premiership",
						"category": {
							"name": "South Africa",
							"slug": "south-africa",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 322,
							"country": {
								"alpha2": "ZA",
								"alpha3": "ZAF",
								"name": "South Africa"
							},
							"flag": "south-africa",
							"alpha2": "ZA"
						},
						"userCount": 31342,
						"id": 358,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 159,
					"id": 3830
				},
				"season": {
					"name": "Premiership 24/25",
					"year": "24/25",
					"editor": false,
					"id": 65113
				},
				"roundInfo": {
					"round": 3
				},
				"customId": "wddsiitc",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "Supersport United",
					"slug": "supersport-united",
					"shortName": "Supersport United",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 11752,
					"nameCode": "SUP",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 7671,
					"country": {
						"alpha2": "ZA",
						"alpha3": "ZAF",
						"name": "South Africa"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "سوبرسبورت يونيتيد",
							"ru": "Суперспорт Юнайтед"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "TS Galaxy",
					"slug": "ts-galaxy",
					"shortName": "TS Galaxy",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 5612,
					"nameCode": "GAL",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 295408,
					"country": {
						"alpha2": "ZA",
						"alpha3": "ZAF",
						"name": "South Africa"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					}
				},
				"homeScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"injuryTime1": 1,
					"injuryTime2": 3,
					"currentPeriodStartTimestamp": 1727289163
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727292098
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12662028,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727285400,
				"slug": "ts-galaxy-supersport-united",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "USL Championship",
					"slug": "usl-championship",
					"category": {
						"name": "USA",
						"slug": "usa",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 26,
						"country": {
							"alpha2": "US",
							"alpha3": "USA",
							"name": "USA"
						},
						"flag": "usa",
						"alpha2": "US"
					},
					"uniqueTournament": {
						"name": "USL Championship",
						"slug": "usl-championship",
						"category": {
							"name": "USA",
							"slug": "usa",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 26,
							"country": {
								"alpha2": "US",
								"alpha3": "USA",
								"name": "USA"
							},
							"flag": "usa",
							"alpha2": "US"
						},
						"userCount": 6621,
						"id": 13363,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 96,
					"id": 71367
				},
				"season": {
					"name": "USL Championship 2024",
					"year": "2024",
					"editor": false,
					"id": 57319
				},
				"roundInfo": {
					"round": 1
				},
				"customId": "tFlbsGfMb",
				"status": {
					"code": 0,
					"description": "Not started",
					"type": "notstarted"
				},
				"homeTeam": {
					"name": "Orange County SC",
					"slug": "orange-county-sc",
					"shortName": "Orange County SC",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 2489,
					"nameCode": "OC",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 217781,
					"country": {
						"alpha2": "US",
						"alpha3": "USA",
						"name": "USA"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Оранж Каунти ФК"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Phoenix Rising FC",
					"slug": "phoenix-rising-fc",
					"shortName": "Phoenix Rising",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 3429,
					"nameCode": "PHO",
					"national": false,
					"type": 0,
					"id": 154018,
					"country": {
						"alpha2": "US",
						"alpha3": "USA",
						"name": "USA"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Финикс Райзинг ФК"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {},
				"awayScore": {},
				"time": {},
				"changes": {
					"changeTimestamp": 0
				},
				"hasGlobalHighlights": false,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12143125,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727317800,
				"slug": "orange-county-sc-phoenix-rising-fc",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "EFL Trophy, Northern Group E",
					"slug": "efl-trophy-northern-group-e",
					"category": {
						"name": "England",
						"slug": "england",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 1,
						"country": {
							"alpha2": "EN",
							"alpha3": "ENG",
							"name": "England"
						},
						"flag": "england",
						"alpha2": "EN"
					},
					"uniqueTournament": {
						"name": "Football League Trophy",
						"slug": "football-league-trophy",
						"category": {
							"name": "England",
							"slug": "england",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 1,
							"country": {
								"alpha2": "EN",
								"alpha3": "ENG",
								"name": "England"
							},
							"flag": "england",
							"alpha2": "EN"
						},
						"userCount": 9138,
						"crowdsourcingEnabled": false,
						"hasPerformanceGraphFeature": false,
						"id": 334,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 80,
					"id": 55453
				},
				"season": {
					"name": "EFL Trophy 24/25",
					"year": "24/25",
					"editor": false,
					"id": 63542
				},
				"customId": "jdsgGo",
				"status": {
					"code": 120,
					"description": "AP",
					"type": "finished"
				},
				"winnerCode": 3,
				"homeTeam": {
					"name": "Harrogate Town",
					"slug": "harrogate-town",
					"shortName": "Harrogate",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 5725,
					"nameCode": "HTO",
					"national": false,
					"type": 0,
					"id": 159,
					"country": {
						"alpha2": "EN",
						"alpha3": "ENG",
						"name": "England"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Харрогейт Таун"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Liverpool U21",
					"slug": "liverpool-u21",
					"shortName": "Liverpool U21",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 9669,
					"nameCode": "LFC",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 36556,
					"country": {
						"alpha2": "EN",
						"alpha3": "ENG",
						"name": "England"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Ливерпуль"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 5,
					"display": 1,
					"period1": 1,
					"period2": 0,
					"normaltime": 1,
					"penalties": 4
				},
				"awayScore": {
					"current": 3,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1,
					"penalties": 2
				},
				"time": {
					"injuryTime1": 1,
					"injuryTime2": 3,
					"currentPeriodStartTimestamp": 1727207208
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.display",
						"homeScore.penalties",
						"awayScore.display",
						"awayScore.penalties"
					],
					"changeTimestamp": 1727210709
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12889364,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727203500,
				"slug": "liverpool-u21-harrogate-town",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "EFL Trophy, Northern Group F",
					"slug": "efl-trophy-northern-group-f",
					"category": {
						"name": "England",
						"slug": "england",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 1,
						"country": {
							"alpha2": "EN",
							"alpha3": "ENG",
							"name": "England"
						},
						"flag": "england",
						"alpha2": "EN"
					},
					"uniqueTournament": {
						"name": "Football League Trophy",
						"slug": "football-league-trophy",
						"category": {
							"name": "England",
							"slug": "england",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 1,
							"country": {
								"alpha2": "EN",
								"alpha3": "ENG",
								"name": "England"
							},
							"flag": "england",
							"alpha2": "EN"
						},
						"userCount": 9138,
						"crowdsourcingEnabled": false,
						"hasPerformanceGraphFeature": false,
						"id": 334,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 79,
					"id": 55454
				},
				"season": {
					"name": "EFL Trophy 24/25",
					"year": "24/25",
					"editor": false,
					"id": 63542
				},
				"customId": "JbsFCo",
				"status": {
					"code": 120,
					"description": "AP",
					"type": "finished"
				},
				"winnerCode": 3,
				"homeTeam": {
					"name": "Doncaster Rovers",
					"slug": "doncaster-rovers",
					"shortName": "Doncaster",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 8798,
					"nameCode": "DR",
					"national": false,
					"type": 0,
					"id": 84,
					"country": {
						"alpha2": "EN",
						"alpha3": "ENG",
						"name": "England"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "دنكاستر روفرز",
							"ru": "Донкастер Роверс"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Manchester United U21",
					"slug": "manchester-united-u21",
					"shortName": "Man Utd U21",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 16577,
					"nameCode": "MU",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 36380,
					"country": {
						"alpha2": "EN",
						"alpha3": "ENG",
						"name": "England"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Манчестер Юнайтед"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 6,
					"display": 3,
					"period1": 1,
					"period2": 2,
					"normaltime": 3,
					"penalties": 3
				},
				"awayScore": {
					"current": 8,
					"display": 3,
					"period1": 1,
					"period2": 2,
					"normaltime": 3,
					"penalties": 5
				},
				"time": {
					"injuryTime1": 2,
					"injuryTime2": 5,
					"currentPeriodStartTimestamp": 1727204533
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.display",
						"homeScore.penalties",
						"awayScore.display",
						"awayScore.penalties"
					],
					"changeTimestamp": 1727208347
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12503998,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727200800,
				"slug": "manchester-united-u21-doncaster-rovers",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "EFL Trophy, Northern Group G",
					"slug": "efl-trophy-northern-group-g",
					"category": {
						"name": "England",
						"slug": "england",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 1,
						"country": {
							"alpha2": "EN",
							"alpha3": "ENG",
							"name": "England"
						},
						"flag": "england",
						"alpha2": "EN"
					},
					"uniqueTournament": {
						"name": "Football League Trophy",
						"slug": "football-league-trophy",
						"category": {
							"name": "England",
							"slug": "england",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 1,
							"country": {
								"alpha2": "EN",
								"alpha3": "ENG",
								"name": "England"
							},
							"flag": "england",
							"alpha2": "EN"
						},
						"userCount": 9138,
						"crowdsourcingEnabled": false,
						"hasPerformanceGraphFeature": false,
						"id": 334,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 78,
					"id": 55455
				},
				"season": {
					"name": "EFL Trophy 24/25",
					"year": "24/25",
					"editor": false,
					"id": 63542
				},
				"customId": "RbsUFo",
				"status": {
					"code": 60,
					"description": "Postponed",
					"type": "postponed"
				},
				"homeTeam": {
					"name": "Lincoln City",
					"slug": "lincoln-city",
					"shortName": "Lincoln",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 10887,
					"nameCode": "LIC",
					"national": false,
					"type": 0,
					"id": 92,
					"country": {
						"alpha2": "EN",
						"alpha3": "ENG",
						"name": "England"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "لينكولن سيتي",
							"ru": "Линкольн Сити"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Manchester City U21",
					"slug": "manchester-city-u21",
					"shortName": "Man City U21",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 10192,
					"nameCode": "MAC",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 36544,
					"country": {
						"alpha2": "EN",
						"alpha3": "ENG",
						"name": "England"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Манчестер Сити"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {},
				"awayScore": {},
				"time": {},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727092949
				},
				"hasGlobalHighlights": false,
				"hasEventPlayerStatistics": false,
				"hasEventPlayerHeatMap": false,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12503881,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727200800,
				"slug": "manchester-city-u21-lincoln-city",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "EFL Trophy, Southern Group C",
					"slug": "efl-trophy-southern-group-c",
					"category": {
						"name": "England",
						"slug": "england",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 1,
						"country": {
							"alpha2": "EN",
							"alpha3": "ENG",
							"name": "England"
						},
						"flag": "england",
						"alpha2": "EN"
					},
					"uniqueTournament": {
						"name": "Football League Trophy",
						"slug": "football-league-trophy",
						"category": {
							"name": "England",
							"slug": "england",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 1,
							"country": {
								"alpha2": "EN",
								"alpha3": "ENG",
								"name": "England"
							},
							"flag": "england",
							"alpha2": "EN"
						},
						"userCount": 9138,
						"crowdsourcingEnabled": false,
						"hasPerformanceGraphFeature": false,
						"id": 334,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 74,
					"id": 55459
				},
				"season": {
					"name": "EFL Trophy 24/25",
					"year": "24/25",
					"editor": false,
					"id": 63542
				},
				"customId": "FdsOFo",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "Bromley",
					"slug": "bromley",
					"shortName": "Bromley",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 6520,
					"nameCode": "BRO",
					"national": false,
					"type": 0,
					"id": 180,
					"country": {
						"alpha2": "EN",
						"alpha3": "ENG",
						"name": "England"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "ФК Бромли"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Chelsea U21",
					"slug": "chelsea-u21",
					"shortName": "Chelsea U21",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 15698,
					"nameCode": "CFC",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 36539,
					"country": {
						"alpha2": "EN",
						"alpha3": "ENG",
						"name": "England"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Челси"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 2,
					"display": 2,
					"period1": 1,
					"period2": 1,
					"normaltime": 2
				},
				"awayScore": {
					"current": 3,
					"display": 3,
					"period1": 2,
					"period2": 1,
					"normaltime": 3
				},
				"time": {
					"injuryTime1": 1,
					"injuryTime2": 2,
					"currentPeriodStartTimestamp": 1727207217
				},
				"changes": {
					"changes": [
						"time.injuryTime2",
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727210067
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12503848,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727203500,
				"slug": "chelsea-u21-bromley",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "EFL Trophy, Southern Group D",
					"slug": "efl-trophy-southern-group-d",
					"category": {
						"name": "England",
						"slug": "england",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 1,
						"country": {
							"alpha2": "EN",
							"alpha3": "ENG",
							"name": "England"
						},
						"flag": "england",
						"alpha2": "EN"
					},
					"uniqueTournament": {
						"name": "Football League Trophy",
						"slug": "football-league-trophy",
						"category": {
							"name": "England",
							"slug": "england",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 1,
							"country": {
								"alpha2": "EN",
								"alpha3": "ENG",
								"name": "England"
							},
							"flag": "england",
							"alpha2": "EN"
						},
						"userCount": 9138,
						"crowdsourcingEnabled": false,
						"hasPerformanceGraphFeature": false,
						"id": 334,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 73,
					"id": 55460
				},
				"season": {
					"name": "EFL Trophy 24/25",
					"year": "24/25",
					"editor": false,
					"id": 63542
				},
				"customId": "vsuhG",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "Gillingham",
					"slug": "gillingham",
					"shortName": "Gillingham",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 7734,
					"nameCode": "GIL",
					"national": false,
					"type": 0,
					"id": 20,
					"country": {
						"alpha2": "EN",
						"alpha3": "ENG",
						"name": "England"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "ФК Джиллингем"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Crystal Palace U21",
					"slug": "crystal-palace-u21",
					"shortName": "Crystal Palace U21",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 4345,
					"nameCode": "CRP",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 77869,
					"country": {
						"alpha2": "EN",
						"alpha3": "ENG",
						"name": "England"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Кристал Пэлас ФК"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"awayScore": {
					"current": 3,
					"display": 3,
					"period1": 2,
					"period2": 1,
					"normaltime": 3
				},
				"time": {
					"injuryTime1": 1,
					"injuryTime2": 5,
					"currentPeriodStartTimestamp": 1727204533
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727207570
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12503843,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727200800,
				"slug": "crystal-palace-u21-gillingham",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "EFL Trophy, Southern Group F",
					"slug": "efl-trophy-southern-group-f",
					"category": {
						"name": "England",
						"slug": "england",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 1,
						"country": {
							"alpha2": "EN",
							"alpha3": "ENG",
							"name": "England"
						},
						"flag": "england",
						"alpha2": "EN"
					},
					"uniqueTournament": {
						"name": "Football League Trophy",
						"slug": "football-league-trophy",
						"category": {
							"name": "England",
							"slug": "england",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 1,
							"country": {
								"alpha2": "EN",
								"alpha3": "ENG",
								"name": "England"
							},
							"flag": "england",
							"alpha2": "EN"
						},
						"userCount": 9138,
						"crowdsourcingEnabled": false,
						"hasPerformanceGraphFeature": false,
						"id": 334,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 71,
					"id": 55462
				},
				"season": {
					"name": "EFL Trophy 24/25",
					"year": "24/25",
					"editor": false,
					"id": 63542
				},
				"customId": "gbsJc",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "Burton Albion",
					"slug": "burton-albion",
					"shortName": "Burton",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 8457,
					"nameCode": "BUR",
					"national": false,
					"type": 0,
					"id": 134,
					"country": {
						"alpha2": "EN",
						"alpha3": "ENG",
						"name": "England"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "بورتون البيون",
							"ru": "Бертон Альбион"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Notts County",
					"slug": "notts-county",
					"shortName": "Notts County",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 16625,
					"nameCode": "NOC",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 56,
					"country": {
						"alpha2": "EN",
						"alpha3": "ENG",
						"name": "England"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "نوتس كاونتي",
							"ru": "Ноттс Каунти"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"awayScore": {
					"current": 2,
					"display": 2,
					"period1": 1,
					"period2": 1,
					"normaltime": 2
				},
				"time": {
					"injuryTime1": 1,
					"injuryTime2": 5,
					"currentPeriodStartTimestamp": 1727204451
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727207466
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12752729,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727200800,
				"slug": "burton-albion-notts-county",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "EFL Trophy, Southern Group G",
					"slug": "efl-trophy-southern-group-g",
					"category": {
						"name": "England",
						"slug": "england",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 1,
						"country": {
							"alpha2": "EN",
							"alpha3": "ENG",
							"name": "England"
						},
						"flag": "england",
						"alpha2": "EN"
					},
					"uniqueTournament": {
						"name": "Football League Trophy",
						"slug": "football-league-trophy",
						"category": {
							"name": "England",
							"slug": "england",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 1,
							"country": {
								"alpha2": "EN",
								"alpha3": "ENG",
								"name": "England"
							},
							"flag": "england",
							"alpha2": "EN"
						},
						"userCount": 9138,
						"crowdsourcingEnabled": false,
						"hasPerformanceGraphFeature": false,
						"id": 334,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 70,
					"id": 55463
				},
				"season": {
					"name": "EFL Trophy 24/25",
					"year": "24/25",
					"editor": false,
					"id": 63542
				},
				"customId": "LbsphG",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "Exeter City",
					"slug": "exeter-city",
					"shortName": "Exeter",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 10242,
					"nameCode": "EXC",
					"national": false,
					"type": 0,
					"id": 86,
					"country": {
						"alpha2": "EN",
						"alpha3": "ENG",
						"name": "England"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "إكسترستي",
							"ru": "Эксетер Сити"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Tottenham U21",
					"slug": "tottenham-u21",
					"shortName": "Tottenham U21",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 7078,
					"nameCode": "TOT",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 77865,
					"country": {
						"alpha2": "EN",
						"alpha3": "ENG",
						"name": "England"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Тоттенхэм"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 2,
					"display": 2,
					"period1": 0,
					"period2": 2,
					"normaltime": 2
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"injuryTime1": 0,
					"injuryTime2": 6,
					"currentPeriodStartTimestamp": 1727204424
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727207531
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12503818,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727200800,
				"slug": "tottenham-u21-exeter-city",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "K-League 2",
					"slug": "k-league-2",
					"category": {
						"name": "South Korea",
						"slug": "south-korea",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 291,
						"country": {
							"alpha2": "KR",
							"alpha3": "KOR",
							"name": "South Korea"
						},
						"flag": "south-korea",
						"alpha2": "KR"
					},
					"uniqueTournament": {
						"name": "K League 2",
						"slug": "k-league-2",
						"category": {
							"name": "South Korea",
							"slug": "south-korea",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 291,
							"country": {
								"alpha2": "KR",
								"alpha3": "KOR",
								"name": "South Korea"
							},
							"flag": "south-korea",
							"alpha2": "KR"
						},
						"userCount": 5711,
						"id": 777,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 28,
					"id": 6230
				},
				"season": {
					"name": "K-League 2 2024",
					"year": "2024",
					"editor": false,
					"id": 57993
				},
				"roundInfo": {
					"round": 32
				},
				"customId": "bddsOaM",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "Bucheon FC 1995",
					"slug": "bucheon-fc-1995",
					"shortName": "Bucheon",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 4405,
					"nameCode": "BUC",
					"national": false,
					"type": 0,
					"id": 92539,
					"country": {
						"alpha2": "KR",
						"alpha3": "KOR",
						"name": "South Korea"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "1995 نادي كرة القدم بوشيون",
							"ru": "Пучхон ФК"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Seongnam FC",
					"slug": "seongnam-fc",
					"shortName": "Seongnam",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 3998,
					"nameCode": "SEO",
					"national": false,
					"type": 0,
					"id": 7651,
					"country": {
						"alpha2": "KR",
						"alpha3": "KOR",
						"name": "South Korea"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Соннам"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 3,
					"display": 3,
					"period1": 1,
					"period2": 2,
					"normaltime": 3
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"injuryTime1": 2,
					"injuryTime2": 5,
					"currentPeriodStartTimestamp": 1727266975
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727266978
				},
				"hasGlobalHighlights": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12065790,
				"awayRedCards": 1,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727260200,
				"slug": "bucheon-fc-1995-seongnam-fc",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "K-League 2",
					"slug": "k-league-2",
					"category": {
						"name": "South Korea",
						"slug": "south-korea",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 291,
						"country": {
							"alpha2": "KR",
							"alpha3": "KOR",
							"name": "South Korea"
						},
						"flag": "south-korea",
						"alpha2": "KR"
					},
					"uniqueTournament": {
						"name": "K League 2",
						"slug": "k-league-2",
						"category": {
							"name": "South Korea",
							"slug": "south-korea",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 291,
							"country": {
								"alpha2": "KR",
								"alpha3": "KOR",
								"name": "South Korea"
							},
							"flag": "south-korea",
							"alpha2": "KR"
						},
						"userCount": 5711,
						"id": 777,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 28,
					"id": 6230
				},
				"season": {
					"name": "K-League 2 2024",
					"year": "2024",
					"editor": false,
					"id": 57993
				},
				"roundInfo": {
					"round": 32
				},
				"customId": "vPisxdDb",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 3,
				"homeTeam": {
					"name": "Gyeongnam FC",
					"slug": "gyeongnam-fc",
					"shortName": "Gyeongnam",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 4821,
					"nameCode": "GYE",
					"national": false,
					"type": 0,
					"id": 22020,
					"country": {
						"alpha2": "KR",
						"alpha3": "KOR",
						"name": "South Korea"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "جيونجنام إف سي",
							"ru": "Гёнгхам ФК"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Gimpo FC",
					"slug": "gimpo-fc",
					"shortName": "Gimpo FC",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 4867,
					"nameCode": "GIM",
					"national": false,
					"type": 0,
					"id": 195172,
					"country": {
						"alpha2": "KR",
						"alpha3": "KOR",
						"name": "South Korea"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Гимпо"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 1,
					"display": 1,
					"period1": 1,
					"period2": 0,
					"normaltime": 1
				},
				"awayScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"time": {
					"injuryTime1": 3,
					"injuryTime2": 5,
					"currentPeriodStartTimestamp": 1727267014
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727267017
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12065791,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727260200,
				"slug": "gimpo-fc-gyeongnam-fc",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "K-League 2",
					"slug": "k-league-2",
					"category": {
						"name": "South Korea",
						"slug": "south-korea",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 291,
						"country": {
							"alpha2": "KR",
							"alpha3": "KOR",
							"name": "South Korea"
						},
						"flag": "south-korea",
						"alpha2": "KR"
					},
					"uniqueTournament": {
						"name": "K League 2",
						"slug": "k-league-2",
						"category": {
							"name": "South Korea",
							"slug": "south-korea",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 291,
							"country": {
								"alpha2": "KR",
								"alpha3": "KOR",
								"name": "South Korea"
							},
							"flag": "south-korea",
							"alpha2": "KR"
						},
						"userCount": 5711,
						"id": 777,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 28,
					"id": 6230
				},
				"season": {
					"name": "K-League 2 2024",
					"year": "2024",
					"editor": false,
					"id": 57993
				},
				"roundInfo": {
					"round": 32
				},
				"customId": "Rcdscdd",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "Suwon Samsung Bluewings",
					"slug": "suwon-samsung-bluewings",
					"shortName": "Suwon Bluewings",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 6360,
					"nameCode": "SUW",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 7652,
					"country": {
						"alpha2": "KR",
						"alpha3": "KOR",
						"name": "South Korea"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Сувон Блювингз"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Busan I Park",
					"slug": "busan-i-park",
					"shortName": "Busan",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 5982,
					"nameCode": "BUS",
					"national": false,
					"type": 0,
					"id": 7642,
					"country": {
						"alpha2": "KR",
						"alpha3": "KOR",
						"name": "South Korea"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "بوسان بارك",
							"ru": "Бусан и Парк"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"awayScore": {
					"current": 1,
					"display": 1,
					"period1": 1,
					"period2": 0,
					"normaltime": 1
				},
				"time": {
					"injuryTime1": 3,
					"injuryTime2": 5,
					"currentPeriodStartTimestamp": 1727267234
				},
				"changes": {
					"changes": [
						"cardsCode"
					],
					"changeTimestamp": 1727267939
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12065792,
				"awayRedCards": 1,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727260200,
				"slug": "suwon-samsung-bluewings-busanpark",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Pro League",
					"slug": "uae-pro-league",
					"category": {
						"name": "United Arab Emirates",
						"slug": "united-arab-emirates",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 299,
						"country": {
							"alpha2": "AE",
							"alpha3": "ARE",
							"name": "United Arab Emirates"
						},
						"flag": "united-arab-emirates",
						"alpha2": "AE"
					},
					"uniqueTournament": {
						"name": "UAE Pro League",
						"slug": "uae-pro-league",
						"category": {
							"name": "United Arab Emirates",
							"slug": "united-arab-emirates",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 299,
							"country": {
								"alpha2": "AE",
								"alpha3": "ARE",
								"name": "United Arab Emirates"
							},
							"flag": "united-arab-emirates",
							"alpha2": "AE"
						},
						"userCount": 9872,
						"id": 971,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 22,
					"id": 3608
				},
				"season": {
					"name": "Arabian Gulf League 24/25",
					"year": "24/25",
					"editor": false,
					"id": 64629
				},
				"roundInfo": {
					"round": 4
				},
				"customId": "kGnscOHc",
				"status": {
					"code": 0,
					"description": "Not started",
					"type": "notstarted"
				},
				"homeTeam": {
					"name": "Al Bataeh",
					"slug": "al-bataeh",
					"shortName": "Al Bataeh",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 3458,
					"nameCode": "BAT",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 331952,
					"country": {
						"alpha2": "AE",
						"alpha3": "ARE",
						"name": "United Arab Emirates"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					}
				},
				"awayTeam": {
					"name": "Al-Sharjah",
					"slug": "al-sharjah",
					"shortName": "Al-Sharjah",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 11417,
					"nameCode": "SHJ",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 34060,
					"country": {
						"alpha2": "AE",
						"alpha3": "ARE",
						"name": "United Arab Emirates"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Шарджа ФК"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {},
				"awayScore": {},
				"time": {},
				"changes": {
					"changeTimestamp": 0
				},
				"hasGlobalHighlights": false,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12765308,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727356800,
				"slug": "al-bataeh-al-sharjah",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Niké Liga",
					"slug": "nike-liga",
					"category": {
						"name": "Slovakia",
						"slug": "slovakia",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 23,
						"country": {
							"alpha2": "SK",
							"alpha3": "SVK",
							"name": "Slovakia"
						},
						"flag": "slovakia",
						"alpha2": "SK"
					},
					"uniqueTournament": {
						"name": "Niké Liga",
						"slug": "nike-liga",
						"category": {
							"name": "Slovakia",
							"slug": "slovakia",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 23,
							"country": {
								"alpha2": "SK",
								"alpha3": "SVK",
								"name": "Slovakia"
							},
							"flag": "slovakia",
							"alpha2": "SK"
						},
						"userCount": 8752,
						"id": 211,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 1,
					"id": 92
				},
				"season": {
					"name": "Superliga 24/25",
					"year": "24/25",
					"editor": false,
					"id": 61728
				},
				"roundInfo": {
					"round": 4
				},
				"customId": "XXsnWAb",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "KFC Komárno",
					"slug": "kfc-komarno",
					"shortName": "Komárno",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 3002,
					"nameCode": "KOM",
					"national": false,
					"type": 0,
					"id": 189813,
					"country": {
						"alpha2": "SK",
						"alpha3": "SVK",
						"name": "Slovakia"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Комарно"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "MFK Ružomberok",
					"slug": "mfk-ruzomberok",
					"shortName": "Ružomberok",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 7878,
					"nameCode": "RUZ",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 2397,
					"country": {
						"alpha2": "SK",
						"alpha3": "SVK",
						"name": "Slovakia"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "روزومبيروك",
							"ru": "МФК Ружомберок"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 1,
					"display": 1,
					"period1": 1,
					"period2": 0,
					"normaltime": 1
				},
				"awayScore": {
					"current": 2,
					"display": 2,
					"period1": 0,
					"period2": 2,
					"normaltime": 2
				},
				"time": {
					"injuryTime1": 1,
					"injuryTime2": 5,
					"currentPeriodStartTimestamp": 1727197362
				},
				"changes": {
					"changes": [
						"time.injuryTime1"
					],
					"changeTimestamp": 1727285917
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12702144,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727193600,
				"slug": "kfc-komarno-mfk-ruzomberok",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "OFB Cup",
					"slug": "ofb-cup",
					"category": {
						"name": "Austria",
						"slug": "austria",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 17,
						"country": {
							"alpha2": "AT",
							"alpha3": "AUT",
							"name": "Austria"
						},
						"flag": "austria",
						"alpha2": "AT"
					},
					"uniqueTournament": {
						"name": "ÖFB Cup",
						"slug": "ofb-cup",
						"category": {
							"name": "Austria",
							"slug": "austria",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 17,
							"country": {
								"alpha2": "AT",
								"alpha3": "AUT",
								"name": "Austria"
							},
							"flag": "austria",
							"alpha2": "AT"
						},
						"userCount": 6435,
						"crowdsourcingEnabled": false,
						"hasPerformanceGraphFeature": false,
						"id": 445,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 69
				},
				"season": {
					"name": "OFB Cup 24/25",
					"year": "24/25",
					"editor": false,
					"id": 61671
				},
				"roundInfo": {
					"round": 2,
					"name": "Round 2"
				},
				"customId": "iQshEic",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "Sportunion Mauer",
					"slug": "sportunion-mauer",
					"shortName": "Sportunion Mauer",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 602,
					"nameCode": "SMA",
					"national": false,
					"type": 0,
					"id": 271457,
					"country": {
						"alpha2": "AT",
						"alpha3": "AUT",
						"name": "Austria"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					}
				},
				"awayTeam": {
					"name": "LASK",
					"slug": "lask",
					"shortName": "LASK",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 55010,
					"nameCode": "LASK",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 2058,
					"country": {
						"alpha2": "AT",
						"alpha3": "AUT",
						"name": "Austria"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "طلقة",
							"ru": "ЛАСК"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"awayScore": {
					"current": 4,
					"display": 4,
					"period1": 2,
					"period2": 2,
					"normaltime": 4
				},
				"time": {
					"currentPeriodStartTimestamp": 1727199916
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727199919
				},
				"hasGlobalHighlights": false,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12851190,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727193600,
				"slug": "sportunion-mauer-lask",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "OFB Cup",
					"slug": "ofb-cup",
					"category": {
						"name": "Austria",
						"slug": "austria",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 17,
						"country": {
							"alpha2": "AT",
							"alpha3": "AUT",
							"name": "Austria"
						},
						"flag": "austria",
						"alpha2": "AT"
					},
					"uniqueTournament": {
						"name": "ÖFB Cup",
						"slug": "ofb-cup",
						"category": {
							"name": "Austria",
							"slug": "austria",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 17,
							"country": {
								"alpha2": "AT",
								"alpha3": "AUT",
								"name": "Austria"
							},
							"flag": "austria",
							"alpha2": "AT"
						},
						"userCount": 6435,
						"crowdsourcingEnabled": false,
						"hasPerformanceGraphFeature": false,
						"id": 445,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 69
				},
				"season": {
					"name": "OFB Cup 24/25",
					"year": "24/25",
					"editor": false,
					"id": 61671
				},
				"roundInfo": {
					"round": 2,
					"name": "Round 2"
				},
				"customId": "fQsaR",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "SR Donaufeld",
					"slug": "sr-donaufeld",
					"shortName": "Donaufeld",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 1342,
					"nameCode": "DFL",
					"national": false,
					"type": 0,
					"id": 2100,
					"country": {
						"alpha2": "AT",
						"alpha3": "AUT",
						"name": "Austria"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "دونوفيلد",
							"ru": "СР Донауфельд"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "SK Rapid Wien",
					"slug": "sk-rapid-wien",
					"shortName": "Rapid",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 37807,
					"nameCode": "SCR",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 2055,
					"country": {
						"alpha2": "AT",
						"alpha3": "AUT",
						"name": "Austria"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "رابيد فيينا",
							"ru": "Рапид Вена"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 1,
					"display": 1,
					"period1": 1,
					"period2": 0,
					"normaltime": 1
				},
				"awayScore": {
					"current": 3,
					"display": 3,
					"period1": 0,
					"period2": 3,
					"normaltime": 3
				},
				"time": {
					"injuryTime1": 1,
					"injuryTime2": 3,
					"currentPeriodStartTimestamp": 1727286601
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727286607
				},
				"hasGlobalHighlights": false,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12618834,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727280000,
				"slug": "sr-donaufeld-sk-rapid-wien",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "OFB Cup",
					"slug": "ofb-cup",
					"category": {
						"name": "Austria",
						"slug": "austria",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 17,
						"country": {
							"alpha2": "AT",
							"alpha3": "AUT",
							"name": "Austria"
						},
						"flag": "austria",
						"alpha2": "AT"
					},
					"uniqueTournament": {
						"name": "ÖFB Cup",
						"slug": "ofb-cup",
						"category": {
							"name": "Austria",
							"slug": "austria",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 17,
							"country": {
								"alpha2": "AT",
								"alpha3": "AUT",
								"name": "Austria"
							},
							"flag": "austria",
							"alpha2": "AT"
						},
						"userCount": 6435,
						"crowdsourcingEnabled": false,
						"hasPerformanceGraphFeature": false,
						"id": 445,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 69
				},
				"season": {
					"name": "OFB Cup 24/25",
					"year": "24/25",
					"editor": false,
					"id": 61671
				},
				"roundInfo": {
					"round": 2,
					"name": "Round 2"
				},
				"customId": "WPsKCE",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "Wiener Viktoria",
					"slug": "wiener-viktoria",
					"shortName": "Viktoria",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 1497,
					"nameCode": "WIV",
					"national": false,
					"type": 0,
					"id": 73885,
					"country": {
						"alpha2": "AT",
						"alpha3": "AUT",
						"name": "Austria"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Виенер Викториа"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Red Bull Salzburg",
					"slug": "red-bull-salzburg",
					"shortName": "RB Salzburg",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 266618,
					"nameCode": "RBS",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 2046,
					"country": {
						"alpha2": "AT",
						"alpha3": "AUT",
						"name": "Austria"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "ريد بول سالزبورغ",
							"ru": "РБ Зальцбург"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"awayScore": {
					"current": 4,
					"display": 4,
					"period1": 2,
					"period2": 2,
					"normaltime": 4
				},
				"time": {
					"currentPeriodStartTimestamp": 1727286684
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727286688
				},
				"hasGlobalHighlights": false,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12618840,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727280000,
				"slug": "wiener-viktoria-red-bull-salzburg",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "2. Liga",
					"slug": "2-liga",
					"category": {
						"name": "Austria",
						"slug": "austria",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 17,
						"country": {
							"alpha2": "AT",
							"alpha3": "AUT",
							"name": "Austria"
						},
						"flag": "austria",
						"alpha2": "AT"
					},
					"uniqueTournament": {
						"name": "2. Liga",
						"slug": "2-liga",
						"category": {
							"name": "Austria",
							"slug": "austria",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 17,
							"country": {
								"alpha2": "AT",
								"alpha3": "AUT",
								"name": "Austria"
							},
							"flag": "austria",
							"alpha2": "AT"
						},
						"userCount": 6247,
						"id": 135,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 30
				},
				"season": {
					"name": "2. Liga 24/25",
					"year": "24/25",
					"editor": false,
					"id": 62657
				},
				"roundInfo": {
					"round": 6
				},
				"customId": "dRsEkGb",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "Sturm Graz II",
					"slug": "sturm-graz-ii",
					"shortName": "Sturm II",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 3390,
					"nameCode": "STU",
					"national": false,
					"type": 0,
					"id": 2103,
					"country": {
						"alpha2": "AT",
						"alpha3": "AUT",
						"name": "Austria"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "سترم غراز هواة",
							"ru": "Штурм Грац (А)"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "SV Stripfing",
					"slug": "stripfingweiden",
					"shortName": "SV Stripfing",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 2766,
					"nameCode": "SVS",
					"national": false,
					"type": 0,
					"id": 203029,
					"country": {
						"alpha2": "AT",
						"alpha3": "AUT",
						"name": "Austria"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					}
				},
				"homeScore": {
					"current": 3,
					"display": 3,
					"period1": 2,
					"period2": 1,
					"normaltime": 3
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"injuryTime1": 2,
					"injuryTime2": 3,
					"currentPeriodStartTimestamp": 1727202108
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727202112
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": false,
				"detailId": 4,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12856900,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727195400,
				"slug": "sv-stripfing-sturm-graz-ii",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Regionalliga Ost",
					"slug": "regionalliga-ost",
					"category": {
						"name": "Austria Amateur",
						"slug": "austria-amateur",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 97,
						"country": {
							"alpha2": "AT",
							"alpha3": "AUT",
							"name": "Austria"
						},
						"flag": "austria",
						"alpha2": "AT"
					},
					"uniqueTournament": {
						"name": "Regionalliga Ost",
						"slug": "regionalliga-ost",
						"category": {
							"name": "Austria Amateur",
							"slug": "austria-amateur",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 97,
							"country": {
								"alpha2": "AT",
								"alpha3": "AUT",
								"name": "Austria"
							},
							"flag": "austria",
							"alpha2": "AT"
						},
						"userCount": 975,
						"id": 166,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 128
				},
				"season": {
					"name": "Regionalliga Ost 24/25",
					"year": "24/25",
					"editor": false,
					"id": 61661
				},
				"roundInfo": {
					"round": 6
				},
				"customId": "iRswHqc",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 3,
				"homeTeam": {
					"name": "FC Marchfeld Donauauen",
					"slug": "fc-marchfeld-donauauen",
					"shortName": "Marchfeld Donauauen",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 1566,
					"nameCode": "MAR",
					"national": false,
					"type": 0,
					"id": 291621,
					"country": {
						"alpha2": "AT",
						"alpha3": "AUT",
						"name": "Austria"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					}
				},
				"awayTeam": {
					"name": "Young Violets Austria Wien",
					"slug": "young-violets-austria-wien",
					"shortName": "YVA",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 2417,
					"nameCode": "AUS",
					"national": false,
					"type": 0,
					"id": 2108,
					"country": {
						"alpha2": "AT",
						"alpha3": "AUT",
						"name": "Austria"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "ФК Аустрия II"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"currentPeriodStartTimestamp": 1727203939
				},
				"changes": {
					"changes": [
						"time.currentPeriodStart",
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.injuryTime2"
					],
					"changeTimestamp": 1727203942
				},
				"hasGlobalHighlights": false,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12799761,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727197200,
				"slug": "fc-marchfeld-donauauen-young-violets-austria-wien",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Regionalliga Ost",
					"slug": "regionalliga-ost",
					"category": {
						"name": "Austria Amateur",
						"slug": "austria-amateur",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 97,
						"country": {
							"alpha2": "AT",
							"alpha3": "AUT",
							"name": "Austria"
						},
						"flag": "austria",
						"alpha2": "AT"
					},
					"uniqueTournament": {
						"name": "Regionalliga Ost",
						"slug": "regionalliga-ost",
						"category": {
							"name": "Austria Amateur",
							"slug": "austria-amateur",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 97,
							"country": {
								"alpha2": "AT",
								"alpha3": "AUT",
								"name": "Austria"
							},
							"flag": "austria",
							"alpha2": "AT"
						},
						"userCount": 975,
						"id": 166,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 128
				},
				"season": {
					"name": "Regionalliga Ost 24/25",
					"year": "24/25",
					"editor": false,
					"id": 61661
				},
				"roundInfo": {
					"round": 7
				},
				"customId": "ZfGbsuzDc",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "ASV Siegendorf",
					"slug": "asv-siegendorf",
					"shortName": "ASV Siegendorf",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 588,
					"nameCode": "ASV",
					"national": false,
					"type": 0,
					"id": 202799,
					"country": {
						"alpha2": "AT",
						"alpha3": "AUT",
						"name": "Austria"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					}
				},
				"awayTeam": {
					"name": "SV Gloggnitz",
					"slug": "sv-gloggnitz",
					"shortName": "SV Gloggnitz",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 226,
					"nameCode": "GLO",
					"national": false,
					"type": 0,
					"id": 321219,
					"country": {
						"alpha2": "AT",
						"alpha3": "AUT",
						"name": "Austria"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					}
				},
				"homeScore": {
					"current": 2,
					"display": 2,
					"period1": 0,
					"period2": 2,
					"normaltime": 2
				},
				"awayScore": {
					"current": 3,
					"display": 3,
					"period1": 2,
					"period2": 1,
					"normaltime": 3
				},
				"time": {
					"injuryTime1": 5,
					"injuryTime2": 4,
					"currentPeriodStartTimestamp": 1727205965
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727205967
				},
				"hasGlobalHighlights": false,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12856792,
				"awayRedCards": 1,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727199000,
				"slug": "sv-gloggnitz-asv-siegendorf",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Regionalliga Ost",
					"slug": "regionalliga-ost",
					"category": {
						"name": "Austria Amateur",
						"slug": "austria-amateur",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 97,
						"country": {
							"alpha2": "AT",
							"alpha3": "AUT",
							"name": "Austria"
						},
						"flag": "austria",
						"alpha2": "AT"
					},
					"uniqueTournament": {
						"name": "Regionalliga Ost",
						"slug": "regionalliga-ost",
						"category": {
							"name": "Austria Amateur",
							"slug": "austria-amateur",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 97,
							"country": {
								"alpha2": "AT",
								"alpha3": "AUT",
								"name": "Austria"
							},
							"flag": "austria",
							"alpha2": "AT"
						},
						"userCount": 975,
						"id": 166,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 128
				},
				"season": {
					"name": "Regionalliga Ost 24/25",
					"year": "24/25",
					"editor": false,
					"id": 61661
				},
				"roundInfo": {
					"round": 7
				},
				"customId": "qQsXgKb",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "FC Mauerwerk",
					"slug": "fc-mauerwerk",
					"shortName": "Mauerwerk",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 1069,
					"nameCode": "MAU",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 212847,
					"country": {
						"alpha2": "AT",
						"alpha3": "AUT",
						"name": "Austria"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					}
				},
				"awayTeam": {
					"name": "Wiener Sport-Club",
					"slug": "wiener-sport-club",
					"shortName": "Wiener SC",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 1657,
					"nameCode": "WSC",
					"national": false,
					"type": 0,
					"id": 2066,
					"country": {
						"alpha2": "AT",
						"alpha3": "AUT",
						"name": "Austria"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Винер Шпорт-Клуб"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 2,
					"display": 2,
					"period1": 0,
					"period2": 2,
					"normaltime": 2
				},
				"awayScore": {
					"current": 3,
					"display": 3,
					"period1": 0,
					"period2": 3,
					"normaltime": 3
				},
				"time": {
					"currentPeriodStartTimestamp": 1727203200
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime"
					],
					"changeTimestamp": 1727206369
				},
				"hasGlobalHighlights": false,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12836136,
				"homeRedCards": 1,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727199000,
				"slug": "fc-mauerwerk-wiener-sport-club",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Regionalliga Ost",
					"slug": "regionalliga-ost",
					"category": {
						"name": "Austria Amateur",
						"slug": "austria-amateur",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 97,
						"country": {
							"alpha2": "AT",
							"alpha3": "AUT",
							"name": "Austria"
						},
						"flag": "austria",
						"alpha2": "AT"
					},
					"uniqueTournament": {
						"name": "Regionalliga Ost",
						"slug": "regionalliga-ost",
						"category": {
							"name": "Austria Amateur",
							"slug": "austria-amateur",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 97,
							"country": {
								"alpha2": "AT",
								"alpha3": "AUT",
								"name": "Austria"
							},
							"flag": "austria",
							"alpha2": "AT"
						},
						"userCount": 975,
						"id": 166,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 128
				},
				"season": {
					"name": "Regionalliga Ost 24/25",
					"year": "24/25",
					"editor": false,
					"id": 61661
				},
				"roundInfo": {
					"round": 7
				},
				"customId": "ORsYBr",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "SV Oberwart",
					"slug": "sv-oberwart",
					"shortName": "Oberwart",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 464,
					"nameCode": "OBE",
					"national": false,
					"type": 0,
					"id": 2139,
					"country": {
						"alpha2": "AT",
						"alpha3": "AUT",
						"name": "Austria"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "إس في أوبيروارت",
							"ru": "СВ Оберварт"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Favoritner AC",
					"slug": "favoritner-ac",
					"shortName": "FavAC",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 902,
					"nameCode": "FAV",
					"national": false,
					"type": 0,
					"id": 43848,
					"country": {
						"alpha2": "AT",
						"alpha3": "AUT",
						"name": "Austria"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "فافوريتنر أي سي",
							"ru": "Фаворитнер АК"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 4,
					"display": 4,
					"period1": 1,
					"period2": 3,
					"normaltime": 4
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"currentPeriodStartTimestamp": 1727202840
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime"
					],
					"changeTimestamp": 1727206016
				},
				"hasGlobalHighlights": false,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12855332,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727199000,
				"slug": "favoritner-ac-sv-oberwart",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Regionalliga Ost",
					"slug": "regionalliga-ost",
					"category": {
						"name": "Austria Amateur",
						"slug": "austria-amateur",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 97,
						"country": {
							"alpha2": "AT",
							"alpha3": "AUT",
							"name": "Austria"
						},
						"flag": "austria",
						"alpha2": "AT"
					},
					"uniqueTournament": {
						"name": "Regionalliga Ost",
						"slug": "regionalliga-ost",
						"category": {
							"name": "Austria Amateur",
							"slug": "austria-amateur",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 97,
							"country": {
								"alpha2": "AT",
								"alpha3": "AUT",
								"name": "Austria"
							},
							"flag": "austria",
							"alpha2": "AT"
						},
						"userCount": 975,
						"id": 166,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 128
				},
				"season": {
					"name": "Regionalliga Ost 24/25",
					"year": "24/25",
					"editor": false,
					"id": 61661
				},
				"roundInfo": {
					"round": 7
				},
				"customId": "TacsKyed",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "TWL Elektra",
					"slug": "twl-elektra",
					"shortName": "TWL Elektra",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 1243,
					"nameCode": "ASK",
					"national": false,
					"type": 0,
					"id": 386185,
					"country": {
						"alpha2": "AT",
						"alpha3": "AUT",
						"name": "Austria"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "إيليكترا"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "SC Neusiedl 1919",
					"slug": "sc-neusiedl-1919",
					"shortName": "Neusiedl",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 1094,
					"nameCode": "NEU",
					"national": false,
					"type": 0,
					"id": 5043,
					"country": {
						"alpha2": "AT",
						"alpha3": "AUT",
						"name": "Austria"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "СК Неусиедл 1919"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 3,
					"display": 3,
					"period1": 2
				},
				"awayScore": {
					"current": 4,
					"display": 4,
					"period1": 1
				},
				"time": {
					"currentPeriodStartTimestamp": 1727205582
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727205586
				},
				"hasGlobalHighlights": false,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12855102,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727199000,
				"slug": "twl-elektra-sc-neusiedl-1919",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Vysshaya League",
					"slug": "vysshaya-league",
					"category": {
						"name": "Belarus",
						"slug": "belarus",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 91,
						"country": {
							"alpha2": "BY",
							"alpha3": "BLR",
							"name": "Belarus"
						},
						"flag": "belarus",
						"alpha2": "BY"
					},
					"uniqueTournament": {
						"name": "Vysshaya Liga",
						"slug": "vysshaya-liga",
						"category": {
							"name": "Belarus",
							"slug": "belarus",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 91,
							"country": {
								"alpha2": "BY",
								"alpha3": "BLR",
								"name": "Belarus"
							},
							"flag": "belarus",
							"alpha2": "BY"
						},
						"userCount": 7002,
						"id": 169,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 616
				},
				"season": {
					"name": "Vysshaya Liga 2024",
					"year": "2024",
					"editor": false,
					"seasonCoverageInfo": {
						"editorCoverageLevel": 2
					},
					"id": 58774
				},
				"roundInfo": {
					"round": 17
				},
				"customId": "lrbseWc",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "Dinamo Minsk",
					"slug": "dinamo-minsk",
					"shortName": "Dinamo Minsk",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 19755,
					"nameCode": "DMI",
					"national": false,
					"type": 0,
					"id": 3361,
					"country": {
						"alpha2": "BY",
						"alpha3": "BLR",
						"name": "Belarus"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "دينامو مينسك",
							"ru": "Динамо Минск"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "FC Minsk",
					"slug": "fc-minsk",
					"shortName": "Minsk",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 2655,
					"nameCode": "MIN",
					"national": false,
					"type": 0,
					"id": 7304,
					"country": {
						"alpha2": "BY",
						"alpha3": "BLR",
						"name": "Belarus"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "مينسك إف سي",
							"ru": "ФК Минск"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 2,
					"display": 2,
					"period1": 1,
					"period2": 1,
					"normaltime": 2
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"currentPeriodStartTimestamp": 1727199300
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime"
					],
					"changeTimestamp": 1727202284
				},
				"hasGlobalHighlights": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12768323,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727195400,
				"slug": "fc-minsk-dinamo-minsk",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Vysshaya League",
					"slug": "vysshaya-league",
					"category": {
						"name": "Belarus",
						"slug": "belarus",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 91,
						"country": {
							"alpha2": "BY",
							"alpha3": "BLR",
							"name": "Belarus"
						},
						"flag": "belarus",
						"alpha2": "BY"
					},
					"uniqueTournament": {
						"name": "Vysshaya Liga",
						"slug": "vysshaya-liga",
						"category": {
							"name": "Belarus",
							"slug": "belarus",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 91,
							"country": {
								"alpha2": "BY",
								"alpha3": "BLR",
								"name": "Belarus"
							},
							"flag": "belarus",
							"alpha2": "BY"
						},
						"userCount": 7002,
						"id": 169,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 616
				},
				"season": {
					"name": "Vysshaya Liga 2024",
					"year": "2024",
					"editor": false,
					"seasonCoverageInfo": {
						"editorCoverageLevel": 2
					},
					"id": 58774
				},
				"roundInfo": {
					"round": 16
				},
				"customId": "grbsJec",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 3,
				"homeTeam": {
					"name": "Naftan Novopolotsk",
					"slug": "naftan-novopolotsk",
					"shortName": "Naftan Novopolotsk",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 1502,
					"nameCode": "NAF",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 5234,
					"country": {
						"alpha2": "BY",
						"alpha3": "BLR",
						"name": "Belarus"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "نافتان نوفوبول",
							"ru": "Нафтан Новополоцк"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Neman Grodno",
					"slug": "neman-grodno",
					"shortName": "Neman Grodno",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 8199,
					"nameCode": "NEM",
					"national": false,
					"type": 0,
					"id": 3356,
					"country": {
						"alpha2": "BY",
						"alpha3": "BLR",
						"name": "Belarus"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "نيمان",
							"ru": "Неман Гродно"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"injuryTime1": 1,
					"injuryTime2": 4,
					"currentPeriodStartTimestamp": 1727277634
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727277637
				},
				"hasGlobalHighlights": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12768322,
				"homeRedCards": 1,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727271000,
				"slug": "naftan-novopolotsk-neman-grodno",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Division Profesional, Clausura",
					"slug": "division-profesional-clausura",
					"category": {
						"name": "Bolivia",
						"slug": "bolivia",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 379,
						"country": {
							"alpha2": "BO",
							"alpha3": "BOL",
							"name": "Bolivia"
						},
						"flag": "bolivia",
						"alpha2": "BO"
					},
					"uniqueTournament": {
						"name": "División Profesional",
						"slug": "division-profesional",
						"category": {
							"name": "Bolivia",
							"slug": "bolivia",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 379,
							"country": {
								"alpha2": "BO",
								"alpha3": "BOL",
								"name": "Bolivia"
							},
							"flag": "bolivia",
							"alpha2": "BO"
						},
						"userCount": 9826,
						"id": 16736,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 130078
				},
				"season": {
					"name": "División Profesional 2024",
					"year": "2024",
					"editor": false,
					"id": 58156
				},
				"roundInfo": {
					"round": 16
				},
				"customId": "HlhcsUvjc",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 3,
				"homeTeam": {
					"name": "Royal Pari Sion",
					"slug": "royal-pari-sion",
					"shortName": "Royal Pari",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 5345,
					"nameCode": "ROP",
					"national": false,
					"type": 0,
					"id": 273544,
					"country": {
						"alpha2": "BO",
						"alpha3": "BOL",
						"name": "Bolivia"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Роял Пари Сион"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "FC Universitario de Vinto",
					"slug": "fc-universitario-de-vinto",
					"shortName": "Univ. de Vinto",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 3955,
					"nameCode": "UVI",
					"national": false,
					"type": 0,
					"id": 268082,
					"country": {
						"alpha2": "BO",
						"alpha3": "BOL",
						"name": "Bolivia"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					}
				},
				"homeScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"injuryTime1": 3,
					"injuryTime2": 6,
					"currentPeriodStartTimestamp": 1727208288
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727211546
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12753066,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727204400,
				"slug": "royal-pari-sion-fc-universitario-de-vinto",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Division Profesional, Clausura",
					"slug": "division-profesional-clausura",
					"category": {
						"name": "Bolivia",
						"slug": "bolivia",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 379,
						"country": {
							"alpha2": "BO",
							"alpha3": "BOL",
							"name": "Bolivia"
						},
						"flag": "bolivia",
						"alpha2": "BO"
					},
					"uniqueTournament": {
						"name": "División Profesional",
						"slug": "division-profesional",
						"category": {
							"name": "Bolivia",
							"slug": "bolivia",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 379,
							"country": {
								"alpha2": "BO",
								"alpha3": "BOL",
								"name": "Bolivia"
							},
							"flag": "bolivia",
							"alpha2": "BO"
						},
						"userCount": 9826,
						"id": 16736,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 130078
				},
				"season": {
					"name": "División Profesional 2024",
					"year": "2024",
					"editor": false,
					"id": 58156
				},
				"roundInfo": {
					"round": 16
				},
				"customId": "KnJcstfce",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "GV San José de Oruro",
					"slug": "gv-san-jose-de-oruro",
					"shortName": "GV San José",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 2060,
					"nameCode": "CLU",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 505268,
					"country": {
						"alpha2": "BO",
						"alpha3": "BOL",
						"name": "Bolivia"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					}
				},
				"awayTeam": {
					"name": "CD Real Tomayapo",
					"slug": "cd-real-tomayapo",
					"shortName": "Real Tomayapo",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 6735,
					"nameCode": "REA",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 335685,
					"country": {
						"alpha2": "BO",
						"alpha3": "BOL",
						"name": "Bolivia"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					}
				},
				"homeScore": {
					"current": 5,
					"display": 5,
					"period1": 3,
					"period2": 2,
					"normaltime": 5
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"injuryTime1": 4,
					"injuryTime2": 4,
					"currentPeriodStartTimestamp": 1727219251
				},
				"changes": {
					"changes": [
						"time.injuryTime2",
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727222242
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12753062,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727215200,
				"slug": "gv-san-jose-de-oruro-cd-real-tomayapo",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Division Profesional, Clausura",
					"slug": "division-profesional-clausura",
					"category": {
						"name": "Bolivia",
						"slug": "bolivia",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 379,
						"country": {
							"alpha2": "BO",
							"alpha3": "BOL",
							"name": "Bolivia"
						},
						"flag": "bolivia",
						"alpha2": "BO"
					},
					"uniqueTournament": {
						"name": "División Profesional",
						"slug": "division-profesional",
						"category": {
							"name": "Bolivia",
							"slug": "bolivia",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 379,
							"country": {
								"alpha2": "BO",
								"alpha3": "BOL",
								"name": "Bolivia"
							},
							"flag": "bolivia",
							"alpha2": "BO"
						},
						"userCount": 9826,
						"id": 16736,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 130078
				},
				"season": {
					"name": "División Profesional 2024",
					"year": "2024",
					"editor": false,
					"id": 58156
				},
				"roundInfo": {
					"round": 16
				},
				"customId": "oznsvBn",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "Oriente Petrolero",
					"slug": "oriente-petrolero",
					"shortName": "Oriente",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 9063,
					"nameCode": "ORP",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 33820,
					"country": {
						"alpha2": "BO",
						"alpha3": "BOL",
						"name": "Bolivia"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "أورينتي بيتروليرو",
							"ru": "Ориенте Петролеро"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Club Aurora",
					"slug": "club-aurora",
					"shortName": "Club Aurora",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 8971,
					"nameCode": "AUR",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 33714,
					"country": {
						"alpha2": "BO",
						"alpha3": "BOL",
						"name": "Bolivia"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "كلوب اورورا",
							"ru": "Клуб Аврора"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 5,
					"display": 5,
					"period1": 3,
					"period2": 2,
					"normaltime": 5
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"injuryTime1": 3,
					"injuryTime2": 7,
					"currentPeriodStartTimestamp": 1727226345
				},
				"changes": {
					"changes": [
						"time.injuryTime2",
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727229574
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12753061,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727222400,
				"slug": "oriente-petrolero-club-aurora",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Division Profesional, Clausura",
					"slug": "division-profesional-clausura",
					"category": {
						"name": "Bolivia",
						"slug": "bolivia",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 379,
						"country": {
							"alpha2": "BO",
							"alpha3": "BOL",
							"name": "Bolivia"
						},
						"flag": "bolivia",
						"alpha2": "BO"
					},
					"uniqueTournament": {
						"name": "División Profesional",
						"slug": "division-profesional",
						"category": {
							"name": "Bolivia",
							"slug": "bolivia",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 379,
							"country": {
								"alpha2": "BO",
								"alpha3": "BOL",
								"name": "Bolivia"
							},
							"flag": "bolivia",
							"alpha2": "BO"
						},
						"userCount": 9826,
						"id": 16736,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 130078
				},
				"season": {
					"name": "División Profesional 2024",
					"year": "2024",
					"editor": false,
					"id": 58156
				},
				"roundInfo": {
					"round": 16
				},
				"customId": "beusAHid",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "Guabirá",
					"slug": "guabira",
					"shortName": "Guabirá",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 4799,
					"nameCode": "GUA",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 47701,
					"country": {
						"alpha2": "BO",
						"alpha3": "BOL",
						"name": "Bolivia"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Гуабира Монтеро"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "San Antonio Bulo-Bulo",
					"slug": "san-antonio-bulo-bulo",
					"shortName": "San Antonio",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 2310,
					"nameCode": "SAN",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 396625,
					"country": {
						"alpha2": "BO",
						"alpha3": "BOL",
						"name": "Bolivia"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					}
				},
				"homeScore": {
					"current": 1,
					"display": 1,
					"period1": 1,
					"period2": 0,
					"normaltime": 1
				},
				"awayScore": {
					"current": 2,
					"display": 2,
					"period1": 2,
					"period2": 0,
					"normaltime": 2
				},
				"time": {
					"injuryTime1": 3,
					"injuryTime2": 8,
					"currentPeriodStartTimestamp": 1727296662
				},
				"changes": {
					"changes": [
						"time.injuryTime2",
						"status.code",
						"status.description",
						"status.type",
						"cardsCode"
					],
					"changeTimestamp": 1727300124
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12753065,
				"homeRedCards": 2,
				"awayRedCards": 1,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727292600,
				"slug": "san-antonio-bulo-bulo-guabira",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Division Profesional, Clausura",
					"slug": "division-profesional-clausura",
					"category": {
						"name": "Bolivia",
						"slug": "bolivia",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 379,
						"country": {
							"alpha2": "BO",
							"alpha3": "BOL",
							"name": "Bolivia"
						},
						"flag": "bolivia",
						"alpha2": "BO"
					},
					"uniqueTournament": {
						"name": "División Profesional",
						"slug": "division-profesional",
						"category": {
							"name": "Bolivia",
							"slug": "bolivia",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 379,
							"country": {
								"alpha2": "BO",
								"alpha3": "BOL",
								"name": "Bolivia"
							},
							"flag": "bolivia",
							"alpha2": "BO"
						},
						"userCount": 9826,
						"id": 16736,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 130078
				},
				"season": {
					"name": "División Profesional 2024",
					"year": "2024",
					"editor": false,
					"id": 58156
				},
				"roundInfo": {
					"round": 16
				},
				"customId": "Eansaeu",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 3,
				"homeTeam": {
					"name": "Nacional Potosí",
					"slug": "nacional-potosi",
					"shortName": "Nacional Potosí",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 9898,
					"nameCode": "CNP",
					"national": false,
					"type": 0,
					"id": 47700,
					"country": {
						"alpha2": "BO",
						"alpha3": "BOL",
						"name": "Bolivia"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Насьональ Потоси"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "The Strongest",
					"slug": "the-strongest",
					"shortName": "The Strongest",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 40218,
					"nameCode": "STR",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 32529,
					"country": {
						"alpha2": "BO",
						"alpha3": "BOL",
						"name": "Bolivia"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "دي سترونجست",
							"ru": "Стронгест"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 1,
					"display": 1,
					"period1": 1,
					"period2": 0,
					"normaltime": 1
				},
				"awayScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"time": {
					"injuryTime1": 2,
					"injuryTime2": 5,
					"currentPeriodStartTimestamp": 1727305334
				},
				"changes": {
					"changes": [
						"time.injuryTime2",
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727308423
				},
				"hasGlobalHighlights": false,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12753064,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727301600,
				"slug": "nacional-potosi-the-strongest",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Division Profesional, Clausura",
					"slug": "division-profesional-clausura",
					"category": {
						"name": "Bolivia",
						"slug": "bolivia",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 379,
						"country": {
							"alpha2": "BO",
							"alpha3": "BOL",
							"name": "Bolivia"
						},
						"flag": "bolivia",
						"alpha2": "BO"
					},
					"uniqueTournament": {
						"name": "División Profesional",
						"slug": "division-profesional",
						"category": {
							"name": "Bolivia",
							"slug": "bolivia",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 379,
							"country": {
								"alpha2": "BO",
								"alpha3": "BOL",
								"name": "Bolivia"
							},
							"flag": "bolivia",
							"alpha2": "BO"
						},
						"userCount": 9826,
						"id": 16736,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 130078
				},
				"season": {
					"name": "División Profesional 2024",
					"year": "2024",
					"editor": false,
					"id": 58156
				},
				"roundInfo": {
					"round": 16
				},
				"customId": "jQcsAjZc",
				"status": {
					"code": 6,
					"description": "1st half",
					"type": "inprogress"
				},
				"homeTeam": {
					"name": "Bolívar",
					"slug": "bolivar",
					"shortName": "Bolívar",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 49473,
					"nameCode": "BOL",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 7059,
					"country": {
						"alpha2": "BO",
						"alpha3": "BOL",
						"name": "Bolivia"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Клуб Боливар"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Independiente Petrolero",
					"slug": "independiente-petrolero",
					"shortName": "Independiente Petrolero",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 5083,
					"nameCode": "IND",
					"national": false,
					"type": 0,
					"id": 372975,
					"country": {
						"alpha2": "BO",
						"alpha3": "BOL",
						"name": "Bolivia"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					}
				},
				"homeScore": {
					"current": 1,
					"display": 1,
					"period1": 1,
					"normaltime": 1
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"normaltime": 0
				},
				"time": {
					"initial": 0,
					"max": 2700,
					"extra": 540,
					"currentPeriodStartTimestamp": 1727308739
				},
				"changes": {
					"changes": [
						"homeScore.period1",
						"homeScore.normaltime"
					],
					"changeTimestamp": 1727310715
				},
				"hasGlobalHighlights": false,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12753060,
				"statusTime": {
					"prefix": "",
					"initial": 0,
					"max": 2700,
					"timestamp": 1727308739,
					"extra": 540
				},
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727308800,
				"slug": "independiente-petrolero-bolivar",
				"lastPeriod": "period1",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Wwin Liga BiH",
					"slug": "premijer-liga",
					"category": {
						"name": "Bosnia & Herzegovina",
						"slug": "bosnia-herzegovina",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 158,
						"country": {
							"alpha2": "BA",
							"alpha3": "BIH",
							"name": "Bosnia & Herzegovina"
						},
						"flag": "bosnia-herzegovina",
						"alpha2": "BA"
					},
					"uniqueTournament": {
						"name": "Wwin Liga BiH",
						"slug": "wwin-premijer-liga",
						"category": {
							"name": "Bosnia & Herzegovina",
							"slug": "bosnia-herzegovina",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 158,
							"country": {
								"alpha2": "BA",
								"alpha3": "BIH",
								"name": "Bosnia & Herzegovina"
							},
							"flag": "bosnia-herzegovina",
							"alpha2": "BA"
						},
						"userCount": 9758,
						"id": 222,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 2557
				},
				"season": {
					"name": "Wwin Liga BiH 24/25",
					"year": "24/25",
					"editor": false,
					"id": 63463
				},
				"roundInfo": {
					"round": 8
				},
				"customId": "ZxcsXzc",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "FK Radnik Bijeljina",
					"slug": "fk-radnik-bijeljina",
					"shortName": "Radnik",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 1917,
					"nameCode": "RBJ",
					"national": false,
					"type": 0,
					"id": 6149,
					"country": {
						"alpha2": "BA",
						"alpha3": "BIH",
						"name": "Bosnia & Herzegovina"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "FK Radnik Bijeljina"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "FK Sloboda Tuzla",
					"slug": "fk-sloboda-tuzla",
					"shortName": "Sloboda",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 4070,
					"nameCode": "FKS",
					"national": false,
					"type": 0,
					"id": 6247,
					"country": {
						"alpha2": "BA",
						"alpha3": "BIH",
						"name": "Bosnia & Herzegovina"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "FK Sloboda Tuzla"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 2,
					"display": 2,
					"period1": 1,
					"period2": 1,
					"normaltime": 2
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"injuryTime1": 4,
					"injuryTime2": 4,
					"currentPeriodStartTimestamp": 1727193260
				},
				"changes": {
					"changes": [
						"time.currentPeriodStart",
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime"
					],
					"changeTimestamp": 1727193263
				},
				"hasGlobalHighlights": false,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12596285,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727186400,
				"slug": "fk-sloboda-tuzla-fk-radnik-bijeljina",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Wwin Liga BiH",
					"slug": "premijer-liga",
					"category": {
						"name": "Bosnia & Herzegovina",
						"slug": "bosnia-herzegovina",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 158,
						"country": {
							"alpha2": "BA",
							"alpha3": "BIH",
							"name": "Bosnia & Herzegovina"
						},
						"flag": "bosnia-herzegovina",
						"alpha2": "BA"
					},
					"uniqueTournament": {
						"name": "Wwin Liga BiH",
						"slug": "wwin-premijer-liga",
						"category": {
							"name": "Bosnia & Herzegovina",
							"slug": "bosnia-herzegovina",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 158,
							"country": {
								"alpha2": "BA",
								"alpha3": "BIH",
								"name": "Bosnia & Herzegovina"
							},
							"flag": "bosnia-herzegovina",
							"alpha2": "BA"
						},
						"userCount": 9758,
						"id": 222,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 2557
				},
				"season": {
					"name": "Wwin Liga BiH 24/25",
					"year": "24/25",
					"editor": false,
					"id": 63463
				},
				"roundInfo": {
					"round": 8
				},
				"customId": "bycsMqk",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "GOŠK Gabela",
					"slug": "gosk-gabela",
					"shortName": "GOŠK",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 2687,
					"nameCode": "GGA",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 25837,
					"country": {
						"alpha2": "BA",
						"alpha3": "BIH",
						"name": "Bosnia & Herzegovina"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					}
				},
				"awayTeam": {
					"name": "FK Velež Mostar",
					"slug": "fk-velez-mostar",
					"shortName": "FK Velež",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 9326,
					"nameCode": "VEL",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 6151,
					"country": {
						"alpha2": "BA",
						"alpha3": "BIH",
						"name": "Bosnia & Herzegovina"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Вележ Мостар"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"awayScore": {
					"current": 4,
					"display": 4,
					"period1": 3,
					"period2": 1,
					"normaltime": 4
				},
				"time": {
					"currentPeriodStartTimestamp": 1727201535
				},
				"changes": {
					"changes": [
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727201539
				},
				"hasGlobalHighlights": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12596279,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727194500,
				"slug": "gosk-gabela-fk-velez-mostar",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Wwin Liga BiH",
					"slug": "premijer-liga",
					"category": {
						"name": "Bosnia & Herzegovina",
						"slug": "bosnia-herzegovina",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 158,
						"country": {
							"alpha2": "BA",
							"alpha3": "BIH",
							"name": "Bosnia & Herzegovina"
						},
						"flag": "bosnia-herzegovina",
						"alpha2": "BA"
					},
					"uniqueTournament": {
						"name": "Wwin Liga BiH",
						"slug": "wwin-premijer-liga",
						"category": {
							"name": "Bosnia & Herzegovina",
							"slug": "bosnia-herzegovina",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 158,
							"country": {
								"alpha2": "BA",
								"alpha3": "BIH",
								"name": "Bosnia & Herzegovina"
							},
							"flag": "bosnia-herzegovina",
							"alpha2": "BA"
						},
						"userCount": 9758,
						"id": 222,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 2557
				},
				"season": {
					"name": "Wwin Liga BiH 24/25",
					"year": "24/25",
					"editor": false,
					"id": 63463
				},
				"roundInfo": {
					"round": 8
				},
				"customId": "DdcsOec",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "HŠK Zrinjski Mostar",
					"slug": "hsk-zrinjski-mostar",
					"shortName": "Zrinjski",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 34696,
					"nameCode": "ZRI",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 5178,
					"country": {
						"alpha2": "BA",
						"alpha3": "BIH",
						"name": "Bosnia & Herzegovina"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "زرينجسكي موستار",
							"ru": "Зриньски Мостар"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "NK Široki Brijeg",
					"slug": "nk-siroki-brijeg",
					"shortName": "Široki Brijeg",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 6037,
					"nameCode": "SB",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 5239,
					"country": {
						"alpha2": "BA",
						"alpha3": "BIH",
						"name": "Bosnia & Herzegovina"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "NK Siroki Brijeg",
							"ru": "ФК Широки Бриег"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 3,
					"display": 3,
					"period1": 1,
					"period2": 2,
					"normaltime": 3
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"currentPeriodStartTimestamp": 1727206500
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime"
					],
					"changeTimestamp": 1727209277
				},
				"hasGlobalHighlights": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12596289,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727202600,
				"slug": "nk-siroki-brijeg-hsk-zrinjski-mostar",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Wwin Liga BiH",
					"slug": "premijer-liga",
					"category": {
						"name": "Bosnia & Herzegovina",
						"slug": "bosnia-herzegovina",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 158,
						"country": {
							"alpha2": "BA",
							"alpha3": "BIH",
							"name": "Bosnia & Herzegovina"
						},
						"flag": "bosnia-herzegovina",
						"alpha2": "BA"
					},
					"uniqueTournament": {
						"name": "Wwin Liga BiH",
						"slug": "wwin-premijer-liga",
						"category": {
							"name": "Bosnia & Herzegovina",
							"slug": "bosnia-herzegovina",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 158,
							"country": {
								"alpha2": "BA",
								"alpha3": "BIH",
								"name": "Bosnia & Herzegovina"
							},
							"flag": "bosnia-herzegovina",
							"alpha2": "BA"
						},
						"userCount": 9758,
						"id": 222,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 2557
				},
				"season": {
					"name": "Wwin Liga BiH 24/25",
					"year": "24/25",
					"editor": false,
					"id": 63463
				},
				"roundInfo": {
					"round": 8
				},
				"customId": "oQosaVo",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "FK Sloga Meridian",
					"slug": "fk-sloga-meridian",
					"shortName": "Sloga",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 2885,
					"nameCode": "SLD",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 37064,
					"country": {
						"alpha2": "BA",
						"alpha3": "BIH",
						"name": "Bosnia & Herzegovina"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "ФК Слога Добой"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Igman Konjic",
					"slug": "igman-konjic",
					"shortName": "Igman",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 2628,
					"nameCode": "IGK",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 37250,
					"country": {
						"alpha2": "BA",
						"alpha3": "BIH",
						"name": "Bosnia & Herzegovina"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "ФК Игман Конич"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"awayScore": {
					"current": 2,
					"display": 2,
					"period1": 0,
					"period2": 2,
					"normaltime": 2
				},
				"time": {
					"injuryTime1": 1,
					"injuryTime2": 5,
					"currentPeriodStartTimestamp": 1727279520
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727279527
				},
				"hasGlobalHighlights": false,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12596275,
				"homeRedCards": 1,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727272800,
				"slug": "igman-konjic-fk-sloga-meridian",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Wwin Liga BiH",
					"slug": "premijer-liga",
					"category": {
						"name": "Bosnia & Herzegovina",
						"slug": "bosnia-herzegovina",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 158,
						"country": {
							"alpha2": "BA",
							"alpha3": "BIH",
							"name": "Bosnia & Herzegovina"
						},
						"flag": "bosnia-herzegovina",
						"alpha2": "BA"
					},
					"uniqueTournament": {
						"name": "Wwin Liga BiH",
						"slug": "wwin-premijer-liga",
						"category": {
							"name": "Bosnia & Herzegovina",
							"slug": "bosnia-herzegovina",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 158,
							"country": {
								"alpha2": "BA",
								"alpha3": "BIH",
								"name": "Bosnia & Herzegovina"
							},
							"flag": "bosnia-herzegovina",
							"alpha2": "BA"
						},
						"userCount": 9758,
						"id": 222,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 2557
				},
				"season": {
					"name": "Wwin Liga BiH 24/25",
					"year": "24/25",
					"editor": false,
					"id": 63463
				},
				"roundInfo": {
					"round": 8
				},
				"customId": "KecsXxc",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "HŠK Posušje",
					"slug": "hsk-posusje",
					"shortName": "Posušje",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 3911,
					"nameCode": "POS",
					"national": false,
					"type": 0,
					"id": 6147,
					"country": {
						"alpha2": "BA",
						"alpha3": "BIH",
						"name": "Bosnia & Herzegovina"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "НК Посушье"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "FK Borac Banja Luka",
					"slug": "fk-borac-banja-luka",
					"shortName": "Borac",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 18004,
					"nameCode": "BBL",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 5235,
					"country": {
						"alpha2": "BA",
						"alpha3": "BIH",
						"name": "Bosnia & Herzegovina"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "بوراك بانيا لوكا",
							"ru": "ФК Борац Баня Лука"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"awayScore": {
					"current": 2,
					"display": 2,
					"period1": 0,
					"period2": 2,
					"normaltime": 2
				},
				"time": {
					"injuryTime2": 2,
					"currentPeriodStartTimestamp": 1727286415
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727286424
				},
				"hasGlobalHighlights": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12596283,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727280000,
				"slug": "hsk-posusje-fk-borac-banja-luka",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Wwin Liga BiH",
					"slug": "premijer-liga",
					"category": {
						"name": "Bosnia & Herzegovina",
						"slug": "bosnia-herzegovina",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 158,
						"country": {
							"alpha2": "BA",
							"alpha3": "BIH",
							"name": "Bosnia & Herzegovina"
						},
						"flag": "bosnia-herzegovina",
						"alpha2": "BA"
					},
					"uniqueTournament": {
						"name": "Wwin Liga BiH",
						"slug": "wwin-premijer-liga",
						"category": {
							"name": "Bosnia & Herzegovina",
							"slug": "bosnia-herzegovina",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 158,
							"country": {
								"alpha2": "BA",
								"alpha3": "BIH",
								"name": "Bosnia & Herzegovina"
							},
							"flag": "bosnia-herzegovina",
							"alpha2": "BA"
						},
						"userCount": 9758,
						"id": 222,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 2557
				},
				"season": {
					"name": "Wwin Liga BiH 24/25",
					"year": "24/25",
					"editor": false,
					"id": 63463
				},
				"roundInfo": {
					"round": 8
				},
				"customId": "MecsPec",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 3,
				"homeTeam": {
					"name": "FK Sarajevo",
					"slug": "fk-sarajevo",
					"shortName": "Sarajevo",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 19625,
					"nameCode": "FKS",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 5237,
					"country": {
						"alpha2": "BA",
						"alpha3": "BIH",
						"name": "Bosnia & Herzegovina"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "إف كيه سراييفو",
							"ru": "ФК Сараево"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "FK Željezničar",
					"slug": "fk-zeljeznicar",
					"shortName": "Željezničar",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 16355,
					"nameCode": "ZES",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 5240,
					"country": {
						"alpha2": "BA",
						"alpha3": "BIH",
						"name": "Bosnia & Herzegovina"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "FK Zeljeznicar Sarajevo",
							"ru": "ФК Зелэзницар Сараэво"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"awayScore": {
					"current": 1,
					"display": 1,
					"period1": 1,
					"period2": 0,
					"normaltime": 1
				},
				"time": {
					"injuryTime1": 3,
					"injuryTime2": 7,
					"currentPeriodStartTimestamp": 1727295911
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727295913
				},
				"hasGlobalHighlights": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12596277,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727289000,
				"slug": "fk-zeljeznicar-fk-sarajevo",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Parva Liga",
					"slug": "parva-liga",
					"category": {
						"name": "Bulgaria",
						"slug": "bulgaria",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 78,
						"country": {
							"alpha2": "BG",
							"alpha3": "BGR",
							"name": "Bulgaria"
						},
						"flag": "bulgaria",
						"alpha2": "BG"
					},
					"uniqueTournament": {
						"name": "Parva Liga",
						"slug": "parva-liga",
						"primaryColorHex": "#91918f",
						"secondaryColorHex": "#6f4f20",
						"category": {
							"name": "Bulgaria",
							"slug": "bulgaria",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 78,
							"country": {
								"alpha2": "BG",
								"alpha3": "BGR",
								"name": "Bulgaria"
							},
							"flag": "bulgaria",
							"alpha2": "BG"
						},
						"userCount": 18156,
						"id": 247,
						"country": {},
						"crowdsourcingEnabled": false,
						"hasPerformanceGraphFeature": false,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 232
				},
				"season": {
					"name": "Parva Liga 24/25",
					"year": "24/25",
					"editor": false,
					"id": 61477
				},
				"roundInfo": {
					"round": 3
				},
				"customId": "dzFbsFQac",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 3,
				"homeTeam": {
					"name": "FK Septemvri Sofia",
					"slug": "fk-septemvri-sofia",
					"shortName": "Septemvri",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 6036,
					"nameCode": "SES",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 201203,
					"country": {
						"alpha2": "BG",
						"alpha3": "BGR",
						"name": "Bulgaria"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Септември София"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "FC CSKA 1948 Sofia",
					"slug": "fc-cska-1948-sofia",
					"shortName": "CSKA 1948 Sofia",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 15776,
					"nameCode": "CSK",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 252080,
					"country": {
						"alpha2": "BG",
						"alpha3": "BGR",
						"name": "Bulgaria"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					}
				},
				"homeScore": {
					"current": 1,
					"display": 1,
					"period1": 1,
					"period2": 0,
					"normaltime": 1
				},
				"awayScore": {
					"current": 1,
					"display": 1,
					"period1": 1,
					"period2": 0,
					"normaltime": 1
				},
				"time": {
					"injuryTime1": 1,
					"injuryTime2": 4,
					"currentPeriodStartTimestamp": 1727281340
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727281342
				},
				"hasGlobalHighlights": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12783769,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727274600,
				"slug": "fc-cska-1948-sofia-fk-septemvri-sofia",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Canadian Championship",
					"slug": "canadian-championship",
					"category": {
						"name": "Canada",
						"slug": "canada",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 388,
						"country": {
							"alpha2": "CA",
							"alpha3": "CAN",
							"name": "Canada"
						},
						"flag": "canada",
						"alpha2": "CA"
					},
					"uniqueTournament": {
						"name": "Canadian Championship",
						"slug": "canadian-championship",
						"category": {
							"name": "Canada",
							"slug": "canada",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 388,
							"country": {
								"alpha2": "CA",
								"alpha3": "CAN",
								"name": "Canada"
							},
							"flag": "canada",
							"alpha2": "CA"
						},
						"userCount": 1091,
						"crowdsourcingEnabled": false,
						"hasPerformanceGraphFeature": false,
						"id": 9230,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 8317
				},
				"season": {
					"name": "Canadian Championship 2024",
					"year": "2024",
					"editor": false,
					"id": 58745
				},
				"roundInfo": {
					"round": 29,
					"name": "Final",
					"cupRoundType": 1
				},
				"customId": "FQcskPi",
				"status": {
					"code": 0,
					"description": "Not started",
					"type": "notstarted"
				},
				"homeTeam": {
					"name": "Vancouver Whitecaps",
					"slug": "vancouver-whitecaps",
					"shortName": "Vancouver",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 12616,
					"nameCode": "VAN",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 22010,
					"country": {
						"alpha2": "US",
						"alpha3": "USA",
						"name": "USA"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Ванкувер Уайткэпс ФК"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Toronto FC",
					"slug": "toronto-fc",
					"shortName": "Toronto",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 21333,
					"nameCode": "TOR",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 7080,
					"country": {
						"alpha2": "CA",
						"alpha3": "CAN",
						"name": "Canada"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "تورونتو إف سي",
							"ru": "Торонто ФК"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {},
				"awayScore": {},
				"time": {},
				"changes": {
					"changeTimestamp": 0
				},
				"hasGlobalHighlights": false,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12758208,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727316000,
				"slug": "vancouver-whitecaps-toronto-fc",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Primera B",
					"slug": "primera-b",
					"category": {
						"name": "Chile",
						"slug": "chile",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 49,
						"country": {
							"alpha2": "CL",
							"alpha3": "CHL",
							"name": "Chile"
						},
						"flag": "chile",
						"alpha2": "CL"
					},
					"uniqueTournament": {
						"name": "Primera B de Chile",
						"slug": "primera-b",
						"category": {
							"name": "Chile",
							"slug": "chile",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 49,
							"country": {
								"alpha2": "CL",
								"alpha3": "CHL",
								"name": "Chile"
							},
							"flag": "chile",
							"alpha2": "CL"
						},
						"userCount": 6754,
						"id": 1240,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 60673
				},
				"season": {
					"name": "Primera B 2024",
					"year": "2024",
					"editor": false,
					"seasonCoverageInfo": {
						"editorCoverageLevel": 3
					},
					"id": 58194
				},
				"roundInfo": {
					"round": 27
				},
				"customId": "cnbsgnb",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "Santiago Morning",
					"slug": "santiago-morning",
					"shortName": "Santiago Morn.",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 2903,
					"nameCode": "SAM",
					"national": false,
					"type": 0,
					"id": 3156,
					"country": {
						"alpha2": "CL",
						"alpha3": "CHL",
						"name": "Chile"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "سانتياجو مورنينج",
							"ru": "Сантьяго Морнинг"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Unión San Felipe",
					"slug": "union-san-felipe",
					"shortName": "San Felipe",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 3441,
					"nameCode": "USF",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 3152,
					"country": {
						"alpha2": "CL",
						"alpha3": "CHL",
						"name": "Chile"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Сан Фелипе"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"awayScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"time": {
					"currentPeriodStartTimestamp": 1727293096
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime"
					],
					"changeTimestamp": 1727296263
				},
				"hasGlobalHighlights": false,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12041078,
				"awayRedCards": 1,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727289000,
				"slug": "santiago-morning-union-san-felipe",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "FA Cup",
					"slug": "fa-cup",
					"category": {
						"name": "China",
						"slug": "china",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 99,
						"country": {
							"alpha2": "CN",
							"alpha3": "CHN",
							"name": "China"
						},
						"flag": "china",
						"alpha2": "CN"
					},
					"uniqueTournament": {
						"name": "CFA Cup",
						"slug": "cfa-cup",
						"category": {
							"name": "China",
							"slug": "china",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 99,
							"country": {
								"alpha2": "CN",
								"alpha3": "CHN",
								"name": "China"
							},
							"flag": "china",
							"alpha2": "CN"
						},
						"userCount": 3361,
						"crowdsourcingEnabled": false,
						"hasPerformanceGraphFeature": false,
						"id": 882,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 3536
				},
				"season": {
					"name": "FA Cup 2024",
					"year": "2024",
					"editor": false,
					"id": 58767
				},
				"roundInfo": {
					"round": 28,
					"name": "Semifinals",
					"cupRoundType": 2
				},
				"customId": "yrbsMFq",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "Shanghai Port",
					"slug": "shanghai-port",
					"shortName": "Port",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 50562,
					"nameCode": "SHP",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 41537,
					"country": {
						"alpha2": "CN",
						"alpha3": "CHN",
						"name": "China"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Шанхай Порт"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Shanghai Shenhua",
					"slug": "shanghai-shenhua",
					"shortName": "Shenhua",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 26719,
					"nameCode": "SHS",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 3373,
					"country": {
						"alpha2": "CN",
						"alpha3": "CHN",
						"name": "China"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "شانجهاي شينهوا",
							"ru": "Шанхай Шенхуа"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 3,
					"display": 3,
					"period1": 1,
					"period2": 2,
					"normaltime": 3
				},
				"awayScore": {
					"current": 2,
					"display": 2,
					"period1": 1,
					"period2": 1,
					"normaltime": 2
				},
				"time": {
					"injuryTime1": 4,
					"injuryTime2": 8,
					"currentPeriodStartTimestamp": 1727271269
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727271271
				},
				"hasGlobalHighlights": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12754302,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727264100,
				"slug": "shanghai-port-shanghai-shenhua",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Primera B, Clausura",
					"slug": "primera-b-clausura",
					"category": {
						"name": "Colombia",
						"slug": "colombia",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 274,
						"country": {
							"alpha2": "CO",
							"alpha3": "COL",
							"name": "Colombia"
						},
						"flag": "colombia",
						"alpha2": "CO"
					},
					"uniqueTournament": {
						"name": "Categoría Primera B",
						"slug": "primera-b",
						"category": {
							"name": "Colombia",
							"slug": "colombia",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 274,
							"country": {
								"alpha2": "CO",
								"alpha3": "COL",
								"name": "Colombia"
							},
							"flag": "colombia",
							"alpha2": "CO"
						},
						"userCount": 6387,
						"id": 1238,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 60510
				},
				"season": {
					"name": "Primera B 2024",
					"year": "2024",
					"editor": false,
					"id": 57388
				},
				"roundInfo": {
					"round": 12
				},
				"customId": "zMKsPuKb",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 3,
				"homeTeam": {
					"name": "Orsomarso",
					"slug": "orsomarso",
					"shortName": "Orsomarso",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 3832,
					"nameCode": "ORS",
					"national": false,
					"type": 0,
					"id": 213490,
					"country": {
						"alpha2": "CO",
						"alpha3": "COL",
						"name": "Colombia"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Орсомарсо"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Llaneros FC",
					"slug": "llaneros-fc",
					"shortName": "Llaneros",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 6056,
					"nameCode": "LLA",
					"national": false,
					"type": 0,
					"id": 89374,
					"country": {
						"alpha2": "CO",
						"alpha3": "COL",
						"name": "Colombia"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "نادي كرة القدم لانيروس",
							"ru": "Льянерос ФК"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 1,
					"display": 1,
					"period1": 1,
					"period2": 0,
					"normaltime": 1
				},
				"awayScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"time": {
					"injuryTime1": 1,
					"injuryTime2": 6,
					"currentPeriodStartTimestamp": 1727217326
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727217328
				},
				"hasGlobalHighlights": true,
				"detailId": 6,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12532135,
				"homeRedCards": 1,
				"awayRedCards": 1,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727209800,
				"slug": "orsomarso-llaneros-fc",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Primera B, Clausura",
					"slug": "primera-b-clausura",
					"category": {
						"name": "Colombia",
						"slug": "colombia",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 274,
						"country": {
							"alpha2": "CO",
							"alpha3": "COL",
							"name": "Colombia"
						},
						"flag": "colombia",
						"alpha2": "CO"
					},
					"uniqueTournament": {
						"name": "Categoría Primera B",
						"slug": "primera-b",
						"category": {
							"name": "Colombia",
							"slug": "colombia",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 274,
							"country": {
								"alpha2": "CO",
								"alpha3": "COL",
								"name": "Colombia"
							},
							"flag": "colombia",
							"alpha2": "CO"
						},
						"userCount": 6387,
						"id": 1238,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 60510
				},
				"season": {
					"name": "Primera B 2024",
					"year": "2024",
					"editor": false,
					"id": 57388
				},
				"roundInfo": {
					"round": 12
				},
				"customId": "excsoMK",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "Barranquilla FC",
					"slug": "barranquilla-fc",
					"shortName": "Barranquilla",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 4400,
					"nameCode": "BAR",
					"national": false,
					"type": 0,
					"id": 89364,
					"country": {
						"alpha2": "CO",
						"alpha3": "COL",
						"name": "Colombia"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "نادي كرة القدم بارانكويلا",
							"ru": "Барранкилья ФК"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Atlético Huila",
					"slug": "atletico-huila",
					"shortName": "Huila",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 9758,
					"nameCode": "HUI",
					"national": false,
					"type": 0,
					"id": 6104,
					"country": {
						"alpha2": "CO",
						"alpha3": "COL",
						"name": "Colombia"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Атлетико Уила"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"awayScore": {
					"current": 2,
					"display": 2,
					"period1": 1,
					"period2": 1,
					"normaltime": 2
				},
				"time": {
					"injuryTime1": 2,
					"injuryTime2": 7,
					"currentPeriodStartTimestamp": 1727231360
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727231362
				},
				"hasGlobalHighlights": true,
				"detailId": 6,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12532123,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727224200,
				"slug": "barranquilla-fc-atletico-huila",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Super Cup",
					"slug": "super-cup",
					"category": {
						"name": "Cyprus",
						"slug": "cyprus",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 102,
						"country": {
							"alpha2": "CY",
							"alpha3": "CYP",
							"name": "Cyprus"
						},
						"flag": "cyprus",
						"alpha2": "CY"
					},
					"uniqueTournament": {
						"name": "Cypriot Super Cup",
						"slug": "cypriot-super-cup",
						"category": {
							"name": "Cyprus",
							"slug": "cyprus",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 102,
							"country": {
								"alpha2": "CY",
								"alpha3": "CYP",
								"name": "Cyprus"
							},
							"flag": "cyprus",
							"alpha2": "CY"
						},
						"userCount": 1303,
						"crowdsourcingEnabled": false,
						"hasPerformanceGraphFeature": false,
						"id": 550,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 6535
				},
				"season": {
					"name": "Super Cup 2024",
					"year": "2024",
					"editor": false,
					"id": 66659
				},
				"roundInfo": {
					"round": 29,
					"name": "Final",
					"cupRoundType": 1
				},
				"customId": "YrbsBHtb",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "APOEL Nicosia",
					"slug": "apoel-nicosia",
					"shortName": "APOEL",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 60459,
					"nameCode": "APO",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 3398,
					"country": {
						"alpha2": "CY",
						"alpha3": "CYP",
						"name": "Cyprus"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "أبويل نيقوسيا",
							"ru": "АПОЕЛ"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Pafos FC",
					"slug": "pafos-fc",
					"shortName": "Pafos",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 24546,
					"nameCode": "PAF",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 171626,
					"country": {
						"alpha2": "CY",
						"alpha3": "CYP",
						"name": "Cyprus"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "بافوس",
							"ru": "ФК Пафос"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 1,
					"display": 1,
					"period1": 1,
					"period2": 0,
					"normaltime": 1
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"injuryTime1": 8,
					"injuryTime2": 6,
					"currentPeriodStartTimestamp": 1727292781
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727292784
				},
				"hasGlobalHighlights": false,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12817833,
				"awayRedCards": 1,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727285400,
				"slug": "pafos-fc-apoel-nicosia",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "National League",
					"slug": "national-league",
					"category": {
						"name": "England",
						"slug": "england",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 1,
						"country": {
							"alpha2": "EN",
							"alpha3": "ENG",
							"name": "England"
						},
						"flag": "england",
						"alpha2": "EN"
					},
					"uniqueTournament": {
						"name": "National League",
						"slug": "national-league",
						"category": {
							"name": "England",
							"slug": "england",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 1,
							"country": {
								"alpha2": "EN",
								"alpha3": "ENG",
								"name": "England"
							},
							"flag": "england",
							"alpha2": "EN"
						},
						"userCount": 14351,
						"id": 173,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 72
				},
				"season": {
					"name": "National League 24/25",
					"year": "24/25",
					"editor": false,
					"id": 63807
				},
				"roundInfo": {
					"round": 11
				},
				"customId": "ccsOzp",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "AFC Fylde",
					"slug": "afc-fylde",
					"shortName": "Fylde",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 5406,
					"nameCode": "FYL",
					"national": false,
					"type": 0,
					"id": 38739,
					"country": {
						"alpha2": "EN",
						"alpha3": "ENG",
						"name": "England"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "أفك فيلد",
							"ru": "АФК Файлд"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Tamworth",
					"slug": "tamworth",
					"shortName": "Tamworth",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 3043,
					"nameCode": "TAM",
					"national": false,
					"type": 0,
					"id": 102,
					"country": {
						"alpha2": "EN",
						"alpha3": "ENG",
						"name": "England"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "ФК Тамворт"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"awayScore": {
					"current": 2,
					"display": 2,
					"period1": 0,
					"period2": 2,
					"normaltime": 2
				},
				"time": {
					"currentPeriodStartTimestamp": 1727210373
				},
				"changes": {
					"changes": [
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.injuryTime1",
						"time.injuryTime2"
					],
					"changeTimestamp": 1727210389
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12526479,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727203500,
				"slug": "afc-fylde-tamworth",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "National League",
					"slug": "national-league",
					"category": {
						"name": "England",
						"slug": "england",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 1,
						"country": {
							"alpha2": "EN",
							"alpha3": "ENG",
							"name": "England"
						},
						"flag": "england",
						"alpha2": "EN"
					},
					"uniqueTournament": {
						"name": "National League",
						"slug": "national-league",
						"category": {
							"name": "England",
							"slug": "england",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 1,
							"country": {
								"alpha2": "EN",
								"alpha3": "ENG",
								"name": "England"
							},
							"flag": "england",
							"alpha2": "EN"
						},
						"userCount": 14351,
						"id": 173,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 72
				},
				"season": {
					"name": "National League 24/25",
					"year": "24/25",
					"editor": false,
					"id": 63807
				},
				"roundInfo": {
					"round": 11
				},
				"customId": "AbsCb",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "Aldershot Town",
					"slug": "aldershot-town",
					"shortName": "Aldershot",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 3898,
					"nameCode": "ALD",
					"national": false,
					"type": 0,
					"id": 75,
					"country": {
						"alpha2": "EN",
						"alpha3": "ENG",
						"name": "England"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "ФК Олдершот Таун"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Barnet",
					"slug": "barnet",
					"shortName": "Barnet",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 10571,
					"nameCode": "BAR",
					"national": false,
					"type": 0,
					"id": 77,
					"country": {
						"alpha2": "EN",
						"alpha3": "ENG",
						"name": "England"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "ФК Барнет"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"awayScore": {
					"current": 1,
					"display": 1,
					"period1": 1,
					"period2": 0,
					"normaltime": 1
				},
				"time": {
					"injuryTime1": 3,
					"injuryTime2": 4,
					"currentPeriodStartTimestamp": 1727210315
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727210317
				},
				"hasGlobalHighlights": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12526475,
				"homeRedCards": 1,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727203500,
				"slug": "barnet-aldershot-town",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "National League",
					"slug": "national-league",
					"category": {
						"name": "England",
						"slug": "england",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 1,
						"country": {
							"alpha2": "EN",
							"alpha3": "ENG",
							"name": "England"
						},
						"flag": "england",
						"alpha2": "EN"
					},
					"uniqueTournament": {
						"name": "National League",
						"slug": "national-league",
						"category": {
							"name": "England",
							"slug": "england",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 1,
							"country": {
								"alpha2": "EN",
								"alpha3": "ENG",
								"name": "England"
							},
							"flag": "england",
							"alpha2": "EN"
						},
						"userCount": 14351,
						"id": 173,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 72
				},
				"season": {
					"name": "National League 24/25",
					"year": "24/25",
					"editor": false,
					"id": 63807
				},
				"roundInfo": {
					"round": 11
				},
				"customId": "kcswc",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "Altrincham",
					"slug": "altrincham",
					"shortName": "Altrincham",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 3618,
					"nameCode": "ALT",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 110,
					"country": {
						"alpha2": "EN",
						"alpha3": "ENG",
						"name": "England"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Олтрингем"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Dagenham & Redbridge",
					"slug": "dagenham-redbridge",
					"shortName": "Dag & Red",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 3883,
					"nameCode": "DAG",
					"national": false,
					"type": 0,
					"id": 121,
					"country": {
						"alpha2": "EN",
						"alpha3": "ENG",
						"name": "England"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Дагенем энд Редбридж"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 2,
					"display": 2,
					"period1": 1,
					"period2": 1,
					"normaltime": 2
				},
				"awayScore": {
					"current": 1,
					"display": 1,
					"period1": 1,
					"period2": 0,
					"normaltime": 1
				},
				"time": {
					"currentPeriodStartTimestamp": 1727207340
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime"
					],
					"changeTimestamp": 1727210410
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12526477,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727203500,
				"slug": "dagenham-and-redbridge-altrincham",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "National League",
					"slug": "national-league",
					"category": {
						"name": "England",
						"slug": "england",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 1,
						"country": {
							"alpha2": "EN",
							"alpha3": "ENG",
							"name": "England"
						},
						"flag": "england",
						"alpha2": "EN"
					},
					"uniqueTournament": {
						"name": "National League",
						"slug": "national-league",
						"category": {
							"name": "England",
							"slug": "england",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 1,
							"country": {
								"alpha2": "EN",
								"alpha3": "ENG",
								"name": "England"
							},
							"flag": "england",
							"alpha2": "EN"
						},
						"userCount": 14351,
						"id": 173,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 72
				},
				"season": {
					"name": "National League 24/25",
					"year": "24/25",
					"editor": false,
					"id": 63807
				},
				"roundInfo": {
					"round": 11
				},
				"customId": "MbsHd",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "Braintree Town",
					"slug": "braintree-town",
					"shortName": "Braintree",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 2692,
					"nameCode": "BRA",
					"national": false,
					"type": 0,
					"id": 182,
					"country": {
						"alpha2": "EN",
						"alpha3": "ENG",
						"name": "England"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Брейнтри Таун"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "FC Halifax Town",
					"slug": "fc-halifax-town",
					"shortName": "Halifax",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 4408,
					"nameCode": "HAL",
					"national": false,
					"type": 0,
					"id": 87,
					"country": {
						"alpha2": "EN",
						"alpha3": "ENG",
						"name": "England"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "هاليفاكس تون",
							"ru": "Галифакс Таун"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"injuryTime1": 2,
					"injuryTime2": 4,
					"currentPeriodStartTimestamp": 1727210360
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727210362
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12526476,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727203500,
				"slug": "braintree-town-fc-halifax-town",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "National League",
					"slug": "national-league",
					"category": {
						"name": "England",
						"slug": "england",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 1,
						"country": {
							"alpha2": "EN",
							"alpha3": "ENG",
							"name": "England"
						},
						"flag": "england",
						"alpha2": "EN"
					},
					"uniqueTournament": {
						"name": "National League",
						"slug": "national-league",
						"category": {
							"name": "England",
							"slug": "england",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 1,
							"country": {
								"alpha2": "EN",
								"alpha3": "ENG",
								"name": "England"
							},
							"flag": "england",
							"alpha2": "EN"
						},
						"userCount": 14351,
						"id": 173,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 72
				},
				"season": {
					"name": "National League 24/25",
					"year": "24/25",
					"editor": false,
					"id": 63807
				},
				"roundInfo": {
					"round": 11
				},
				"customId": "DcsQyc",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 3,
				"homeTeam": {
					"name": "Eastleigh",
					"slug": "eastleigh",
					"shortName": "Eastleigh",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 4372,
					"nameCode": "EFC",
					"national": false,
					"type": 0,
					"id": 6191,
					"country": {
						"alpha2": "EN",
						"alpha3": "ENG",
						"name": "England"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "ФК Истли"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Woking",
					"slug": "woking",
					"shortName": "Woking",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 4878,
					"nameCode": "WOK",
					"national": false,
					"type": 0,
					"id": 128,
					"country": {
						"alpha2": "EN",
						"alpha3": "ENG",
						"name": "England"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "ФК Уокинг"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 2,
					"display": 2,
					"period1": 1,
					"period2": 1,
					"normaltime": 2
				},
				"awayScore": {
					"current": 2,
					"display": 2,
					"period1": 1,
					"period2": 1,
					"normaltime": 2
				},
				"time": {
					"currentPeriodStartTimestamp": 1727210732
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727210734
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12526468,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727203500,
				"slug": "eastleigh-woking",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "National League",
					"slug": "national-league",
					"category": {
						"name": "England",
						"slug": "england",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 1,
						"country": {
							"alpha2": "EN",
							"alpha3": "ENG",
							"name": "England"
						},
						"flag": "england",
						"alpha2": "EN"
					},
					"uniqueTournament": {
						"name": "National League",
						"slug": "national-league",
						"category": {
							"name": "England",
							"slug": "england",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 1,
							"country": {
								"alpha2": "EN",
								"alpha3": "ENG",
								"name": "England"
							},
							"flag": "england",
							"alpha2": "EN"
						},
						"userCount": 14351,
						"id": 173,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 72
				},
				"season": {
					"name": "National League 24/25",
					"year": "24/25",
					"editor": false,
					"id": 63807
				},
				"roundInfo": {
					"round": 11
				},
				"customId": "zcshd",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "Gateshead",
					"slug": "gateshead",
					"shortName": "Gateshead",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 5842,
					"nameCode": "GAT",
					"national": false,
					"type": 0,
					"id": 157,
					"country": {
						"alpha2": "EN",
						"alpha3": "ENG",
						"name": "England"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Гейтсхед"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Boston United",
					"slug": "boston-united",
					"shortName": "Boston",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 2593,
					"nameCode": "BOS",
					"national": false,
					"type": 0,
					"id": 124,
					"country": {
						"alpha2": "EN",
						"alpha3": "ENG",
						"name": "England"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "ФК Бостон Юнайтед"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 2,
					"display": 2,
					"period1": 2,
					"period2": 0,
					"normaltime": 2
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"currentPeriodStartTimestamp": 1727207340
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727210292
				},
				"hasGlobalHighlights": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12526469,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727203500,
				"slug": "gateshead-boston-united",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "National League",
					"slug": "national-league",
					"category": {
						"name": "England",
						"slug": "england",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 1,
						"country": {
							"alpha2": "EN",
							"alpha3": "ENG",
							"name": "England"
						},
						"flag": "england",
						"alpha2": "EN"
					},
					"uniqueTournament": {
						"name": "National League",
						"slug": "national-league",
						"category": {
							"name": "England",
							"slug": "england",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 1,
							"country": {
								"alpha2": "EN",
								"alpha3": "ENG",
								"name": "England"
							},
							"flag": "england",
							"alpha2": "EN"
						},
						"userCount": 14351,
						"id": 173,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 72
				},
				"season": {
					"name": "National League 24/25",
					"year": "24/25",
					"editor": false,
					"id": 63807
				},
				"roundInfo": {
					"round": 11
				},
				"customId": "bcsdc",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "Hartlepool United",
					"slug": "hartlepool-united",
					"shortName": "Hartlepool",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 4535,
					"nameCode": "HAR",
					"national": false,
					"type": 0,
					"id": 101,
					"country": {
						"alpha2": "EN",
						"alpha3": "ENG",
						"name": "England"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Хартлпул Юнайтед"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Rochdale",
					"slug": "rochdale",
					"shortName": "Rochdale",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 3918,
					"nameCode": "ROC",
					"national": false,
					"type": 0,
					"id": 103,
					"country": {
						"alpha2": "EN",
						"alpha3": "ENG",
						"name": "England"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Рочдейл"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"awayScore": {
					"current": 3,
					"display": 3,
					"period1": 1,
					"period2": 2,
					"normaltime": 3
				},
				"time": {
					"injuryTime2": 5,
					"currentPeriodStartTimestamp": 1727210485
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727210488
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12526471,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727203500,
				"slug": "rochdale-hartlepool-united",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "National League",
					"slug": "national-league",
					"category": {
						"name": "England",
						"slug": "england",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 1,
						"country": {
							"alpha2": "EN",
							"alpha3": "ENG",
							"name": "England"
						},
						"flag": "england",
						"alpha2": "EN"
					},
					"uniqueTournament": {
						"name": "National League",
						"slug": "national-league",
						"category": {
							"name": "England",
							"slug": "england",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 1,
							"country": {
								"alpha2": "EN",
								"alpha3": "ENG",
								"name": "England"
							},
							"flag": "england",
							"alpha2": "EN"
						},
						"userCount": 14351,
						"id": 173,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 72
				},
				"season": {
					"name": "National League 24/25",
					"year": "24/25",
					"editor": false,
					"id": 63807
				},
				"roundInfo": {
					"round": 11
				},
				"customId": "ocsqd",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "Maidenhead United",
					"slug": "maidenhead-united",
					"shortName": "Maidenhead",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 2410,
					"nameCode": "MAI",
					"national": false,
					"type": 0,
					"id": 166,
					"country": {
						"alpha2": "EN",
						"alpha3": "ENG",
						"name": "England"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Мейденхед Юнайтед"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Ebbsfleet United",
					"slug": "ebbsfleet-united",
					"shortName": "Ebbsfleet",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 4120,
					"nameCode": "EBB",
					"national": false,
					"type": 0,
					"id": 114,
					"country": {
						"alpha2": "EN",
						"alpha3": "ENG",
						"name": "England"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Эббсфлит Юнайтед"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 2,
					"display": 2,
					"period1": 1,
					"period2": 1,
					"normaltime": 2
				},
				"awayScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"time": {
					"injuryTime1": 1,
					"injuryTime2": 5,
					"currentPeriodStartTimestamp": 1727210168
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727210170
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12526470,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727203500,
				"slug": "maidenhead-united-ebbsfleet-united",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "National League",
					"slug": "national-league",
					"category": {
						"name": "England",
						"slug": "england",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 1,
						"country": {
							"alpha2": "EN",
							"alpha3": "ENG",
							"name": "England"
						},
						"flag": "england",
						"alpha2": "EN"
					},
					"uniqueTournament": {
						"name": "National League",
						"slug": "national-league",
						"category": {
							"name": "England",
							"slug": "england",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 1,
							"country": {
								"alpha2": "EN",
								"alpha3": "ENG",
								"name": "England"
							},
							"flag": "england",
							"alpha2": "EN"
						},
						"userCount": 14351,
						"id": 173,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 72
				},
				"season": {
					"name": "National League 24/25",
					"year": "24/25",
					"editor": false,
					"id": 63807
				},
				"roundInfo": {
					"round": 11
				},
				"customId": "pbsUb",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "Oldham Athletic",
					"slug": "oldham-athletic",
					"shortName": "Oldham",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 4389,
					"nameCode": "OLD",
					"national": false,
					"type": 0,
					"id": 65,
					"country": {
						"alpha2": "EN",
						"alpha3": "ENG",
						"name": "England"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "أولدهام اتلتيك",
							"ru": "Олдхэм Атлетик"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Forest Green Rovers",
					"slug": "forest-green-rovers",
					"shortName": "Forest Green",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 10074,
					"nameCode": "FGR",
					"national": false,
					"type": 0,
					"id": 94,
					"country": {
						"alpha2": "EN",
						"alpha3": "ENG",
						"name": "England"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "فورست جرين روفر",
							"ru": "Форест Грин Роверс"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 1,
					"display": 1,
					"period1": 1,
					"period2": 0,
					"normaltime": 1
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"injuryTime1": 2,
					"injuryTime2": 5,
					"currentPeriodStartTimestamp": 1727210328
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727210332
				},
				"hasGlobalHighlights": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12526472,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727203500,
				"slug": "forest-green-rovers-oldham-athletic",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "National League",
					"slug": "national-league",
					"category": {
						"name": "England",
						"slug": "england",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 1,
						"country": {
							"alpha2": "EN",
							"alpha3": "ENG",
							"name": "England"
						},
						"flag": "england",
						"alpha2": "EN"
					},
					"uniqueTournament": {
						"name": "National League",
						"slug": "national-league",
						"category": {
							"name": "England",
							"slug": "england",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 1,
							"country": {
								"alpha2": "EN",
								"alpha3": "ENG",
								"name": "England"
							},
							"flag": "england",
							"alpha2": "EN"
						},
						"userCount": 14351,
						"id": 173,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 72
				},
				"season": {
					"name": "National League 24/25",
					"year": "24/25",
					"editor": false,
					"id": 63807
				},
				"roundInfo": {
					"round": 11
				},
				"customId": "ybsRid",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "Solihull Moors",
					"slug": "solihull-moors",
					"shortName": "Solihull Moors",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 6057,
					"nameCode": "SOL",
					"national": false,
					"type": 0,
					"id": 7942,
					"country": {
						"alpha2": "EN",
						"alpha3": "ENG",
						"name": "England"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Солихалл Мурс"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "York City",
					"slug": "york-city",
					"shortName": "York",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 5307,
					"nameCode": "YOR",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 73,
					"country": {
						"alpha2": "EN",
						"alpha3": "ENG",
						"name": "England"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Йорк Сити"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"awayScore": {
					"current": 3,
					"display": 3,
					"period1": 1,
					"period2": 2,
					"normaltime": 3
				},
				"time": {
					"injuryTime1": 1,
					"injuryTime2": 8,
					"currentPeriodStartTimestamp": 1727210498
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime"
					],
					"changeTimestamp": 1727210502
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12526467,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727203500,
				"slug": "solihull-moors-york-city",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "National League",
					"slug": "national-league",
					"category": {
						"name": "England",
						"slug": "england",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 1,
						"country": {
							"alpha2": "EN",
							"alpha3": "ENG",
							"name": "England"
						},
						"flag": "england",
						"alpha2": "EN"
					},
					"uniqueTournament": {
						"name": "National League",
						"slug": "national-league",
						"category": {
							"name": "England",
							"slug": "england",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 1,
							"country": {
								"alpha2": "EN",
								"alpha3": "ENG",
								"name": "England"
							},
							"flag": "england",
							"alpha2": "EN"
						},
						"userCount": 14351,
						"id": 173,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 72
				},
				"season": {
					"name": "National League 24/25",
					"year": "24/25",
					"editor": false,
					"id": 63807
				},
				"roundInfo": {
					"round": 11
				},
				"customId": "GcsOBc",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 3,
				"homeTeam": {
					"name": "Sutton United",
					"slug": "sutton-united",
					"shortName": "Sutton",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 5674,
					"nameCode": "SUT",
					"national": false,
					"type": 0,
					"id": 6339,
					"country": {
						"alpha2": "EN",
						"alpha3": "ENG",
						"name": "England"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Саттон Юнайтед"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Yeovil Town",
					"slug": "yeovil-town",
					"shortName": "Yeovil",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 4788,
					"nameCode": "YEO",
					"national": false,
					"type": 0,
					"id": 131,
					"country": {
						"alpha2": "EN",
						"alpha3": "ENG",
						"name": "England"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "يوفيل تاون",
							"ru": "Йовил Таун"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"injuryTime1": 4,
					"injuryTime2": 6,
					"currentPeriodStartTimestamp": 1727210582
				},
				"changes": {
					"changes": [
						"time.currentPeriodStart",
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime"
					],
					"changeTimestamp": 1727210586
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12526462,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727203500,
				"slug": "sutton-united-yeovil-town",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "National League",
					"slug": "national-league",
					"category": {
						"name": "England",
						"slug": "england",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 1,
						"country": {
							"alpha2": "EN",
							"alpha3": "ENG",
							"name": "England"
						},
						"flag": "england",
						"alpha2": "EN"
					},
					"uniqueTournament": {
						"name": "National League",
						"slug": "national-league",
						"category": {
							"name": "England",
							"slug": "england",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 1,
							"country": {
								"alpha2": "EN",
								"alpha3": "ENG",
								"name": "England"
							},
							"flag": "england",
							"alpha2": "EN"
						},
						"userCount": 14351,
						"id": 173,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 72
				},
				"season": {
					"name": "National League 24/25",
					"year": "24/25",
					"editor": false,
					"id": 63807
				},
				"roundInfo": {
					"round": 11
				},
				"customId": "ZbsNe",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 3,
				"homeTeam": {
					"name": "Wealdstone",
					"slug": "wealdstone",
					"shortName": "Wealdstone",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 3229,
					"nameCode": "WEA",
					"national": false,
					"type": 0,
					"id": 238,
					"country": {
						"alpha2": "EN",
						"alpha3": "ENG",
						"name": "England"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Уэлдстон"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Southend United",
					"slug": "southend-united",
					"shortName": "Southend Utd",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 4661,
					"nameCode": "SOU",
					"national": false,
					"type": 0,
					"id": 99,
					"country": {
						"alpha2": "EN",
						"alpha3": "ENG",
						"name": "England"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "ساوثيند يونايتد",
							"ru": "Саутенд Юнайтед"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"awayScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"time": {
					"injuryTime2": 5,
					"currentPeriodStartTimestamp": 1727210249
				},
				"changes": {
					"changes": [
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime"
					],
					"changeTimestamp": 1727210315
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12526473,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727203500,
				"slug": "wealdstone-southend-united",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Premium Liiga",
					"slug": "premium-liiga",
					"category": {
						"name": "Estonia",
						"slug": "estonia",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 92,
						"country": {
							"alpha2": "EE",
							"alpha3": "EST",
							"name": "Estonia"
						},
						"flag": "estonia",
						"alpha2": "EE"
					},
					"uniqueTournament": {
						"name": "Premium Liiga",
						"slug": "premium-liiga",
						"category": {
							"name": "Estonia",
							"slug": "estonia",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 92,
							"country": {
								"alpha2": "EE",
								"alpha3": "EST",
								"name": "Estonia"
							},
							"flag": "estonia",
							"alpha2": "EE"
						},
						"userCount": 6378,
						"id": 178,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 618
				},
				"season": {
					"name": "Premium Liiga 2024",
					"year": "2024",
					"editor": false,
					"id": 57905
				},
				"roundInfo": {
					"round": 23
				},
				"customId": "WqbsQld",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "Nõmme Kalju",
					"slug": "nomme-kalju",
					"shortName": "Kalju",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 10000,
					"nameCode": "KAL",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 8091,
					"country": {
						"alpha2": "EE",
						"alpha3": "EST",
						"name": "Estonia"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "جيه كيه نوم كالجو",
							"ru": "ФК Нымме Калью"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Flora Tallinn",
					"slug": "flora-tallinn",
					"shortName": "Flora",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 28322,
					"nameCode": "FLO",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 3346,
					"country": {
						"alpha2": "EE",
						"alpha3": "EST",
						"name": "Estonia"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "إف سي فلورا تالين",
							"ru": "Флора Таллин"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 3,
					"display": 3,
					"period1": 1,
					"period2": 2,
					"normaltime": 3
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"currentPeriodStartTimestamp": 1727279446
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727279449
				},
				"hasGlobalHighlights": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12669054,
				"awayRedCards": 1,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727272800,
				"slug": "nomme-kalju-flora-tallinn",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Premium Liiga",
					"slug": "premium-liiga",
					"category": {
						"name": "Estonia",
						"slug": "estonia",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 92,
						"country": {
							"alpha2": "EE",
							"alpha3": "EST",
							"name": "Estonia"
						},
						"flag": "estonia",
						"alpha2": "EE"
					},
					"uniqueTournament": {
						"name": "Premium Liiga",
						"slug": "premium-liiga",
						"category": {
							"name": "Estonia",
							"slug": "estonia",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 92,
							"country": {
								"alpha2": "EE",
								"alpha3": "EST",
								"name": "Estonia"
							},
							"flag": "estonia",
							"alpha2": "EE"
						},
						"userCount": 6378,
						"id": 178,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 618
				},
				"season": {
					"name": "Premium Liiga 2024",
					"year": "2024",
					"editor": false,
					"id": 57905
				},
				"roundInfo": {
					"round": 23
				},
				"customId": "TqbsBZm",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "Paide Linnameeskond",
					"slug": "paide-linnameeskond",
					"shortName": "Paide",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 12901,
					"nameCode": "PAI",
					"national": false,
					"type": 0,
					"id": 32476,
					"country": {
						"alpha2": "EE",
						"alpha3": "EST",
						"name": "Estonia"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "بيد إف سي فلورا",
							"ru": "ФК Пайде Флора"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Narva Trans",
					"slug": "narva-trans",
					"shortName": "Trans",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 3804,
					"nameCode": "NAR",
					"national": false,
					"type": 0,
					"id": 3343,
					"country": {
						"alpha2": "EE",
						"alpha3": "EST",
						"name": "Estonia"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "ترانس نارفا",
							"ru": "Транс Нарва"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 2,
					"display": 2,
					"period1": 1,
					"period2": 1,
					"normaltime": 2
				},
				"awayScore": {
					"current": 3,
					"display": 3,
					"period1": 2,
					"period2": 1,
					"normaltime": 3
				},
				"time": {
					"currentPeriodStartTimestamp": 1727279896
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727279899
				},
				"hasGlobalHighlights": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12664582,
				"homeRedCards": 1,
				"awayRedCards": 1,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727272800,
				"slug": "paide-linnameeskond-narva-trans",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "UEFA Europa League",
					"slug": "uefa-europa-league",
					"category": {
						"name": "Europe",
						"slug": "europe",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 1465,
						"country": {},
						"flag": "europe"
					},
					"uniqueTournament": {
						"name": "UEFA Europa League",
						"slug": "uefa-europa-league",
						"category": {
							"name": "Europe",
							"slug": "europe",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 1465,
							"country": {},
							"flag": "europe"
						},
						"userCount": 789538,
						"crowdsourcingEnabled": false,
						"hasPerformanceGraphFeature": false,
						"id": 679,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 138315
				},
				"season": {
					"name": "UEFA Europa League 24/25",
					"year": "24/25",
					"editor": false,
					"seasonCoverageInfo": {},
					"id": 61645
				},
				"roundInfo": {
					"round": 1
				},
				"customId": "mKsajb",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "AZ Alkmaar",
					"slug": "az-alkmaar",
					"shortName": "AZ",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 195638,
					"nameCode": "AZA",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 2950,
					"country": {
						"alpha2": "NL",
						"alpha3": "NLD",
						"name": "Netherlands"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "إي زد آلكمار",
							"ru": "АЗ Алкмар"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "IF Elfsborg",
					"slug": "if-elfsborg",
					"shortName": "Elfsborg",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 38211,
					"nameCode": "IFE",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 1762,
					"country": {
						"alpha2": "SE",
						"alpha3": "SWE",
						"name": "Sweden"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "اي اف الفسبورج",
							"ru": "ФК Эльфсборг"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 3,
					"display": 3,
					"period1": 1,
					"period2": 2,
					"normaltime": 3
				},
				"awayScore": {
					"current": 2,
					"display": 2,
					"period1": 1,
					"period2": 1,
					"normaltime": 2
				},
				"coverage": -1,
				"time": {
					"injuryTime1": 3,
					"injuryTime2": 4,
					"currentPeriodStartTimestamp": 1727286596
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727289549
				},
				"hasGlobalHighlights": false,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12764215,
				"awayRedCards": 1,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727282700,
				"slug": "az-alkmaar-if-elfsborg",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "UEFA Europa League",
					"slug": "uefa-europa-league",
					"category": {
						"name": "Europe",
						"slug": "europe",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 1465,
						"country": {},
						"flag": "europe"
					},
					"uniqueTournament": {
						"name": "UEFA Europa League",
						"slug": "uefa-europa-league",
						"category": {
							"name": "Europe",
							"slug": "europe",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 1465,
							"country": {},
							"flag": "europe"
						},
						"userCount": 789538,
						"crowdsourcingEnabled": false,
						"hasPerformanceGraphFeature": false,
						"id": 679,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 138315
				},
				"season": {
					"name": "UEFA Europa League 24/25",
					"year": "24/25",
					"editor": false,
					"seasonCoverageInfo": {},
					"id": 61645
				},
				"roundInfo": {
					"round": 1
				},
				"customId": "gnsckb",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "Bodø/Glimt",
					"slug": "bodoglimt",
					"shortName": "Bodø/Glimt",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 186148,
					"nameCode": "BOG",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 656,
					"country": {
						"alpha2": "NO",
						"alpha3": "NOR",
						"name": "Norway"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "بودو/غليمت",
							"ru": "ФК Буде/Глимт"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "FC Porto",
					"slug": "fc-porto",
					"shortName": "Porto",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 735937,
					"nameCode": "FCP",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 3002,
					"country": {
						"alpha2": "PT",
						"alpha3": "PRT",
						"name": "Portugal"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "اف سي بورتو",
							"ru": "Порту"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 3,
					"display": 3,
					"period1": 2,
					"period2": 1,
					"normaltime": 3
				},
				"awayScore": {
					"current": 2,
					"display": 2,
					"period1": 1,
					"period2": 1,
					"normaltime": 2
				},
				"coverage": -1,
				"time": {
					"injuryTime1": 3,
					"injuryTime2": 5,
					"currentPeriodStartTimestamp": 1727286664
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727289765
				},
				"hasGlobalHighlights": false,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12764402,
				"homeRedCards": 1,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727282700,
				"slug": "fc-porto-bodoglimt",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "UEFA Europa League",
					"slug": "uefa-europa-league",
					"category": {
						"name": "Europe",
						"slug": "europe",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 1465,
						"country": {},
						"flag": "europe"
					},
					"uniqueTournament": {
						"name": "UEFA Europa League",
						"slug": "uefa-europa-league",
						"category": {
							"name": "Europe",
							"slug": "europe",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 1465,
							"country": {},
							"flag": "europe"
						},
						"userCount": 789538,
						"crowdsourcingEnabled": false,
						"hasPerformanceGraphFeature": false,
						"id": 679,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 138315
				},
				"season": {
					"name": "UEFA Europa League 24/25",
					"year": "24/25",
					"editor": false,
					"seasonCoverageInfo": {},
					"id": 61645
				},
				"roundInfo": {
					"round": 1
				},
				"customId": "Zdbsfqb",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "Dynamo Kyiv",
					"slug": "dynamo-kyiv",
					"shortName": "Dynamo Kyiv",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 101564,
					"nameCode": "DYK",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 3305,
					"country": {
						"alpha2": "UA",
						"alpha3": "UKR",
						"name": "Ukraine"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "نادي دينامو كييف",
							"ru": "Динамо Киев"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Lazio",
					"slug": "lazio",
					"shortName": "Lazio",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 536263,
					"nameCode": "LAZ",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 2699,
					"country": {
						"alpha2": "IT",
						"alpha3": "ITA",
						"name": "Italy"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "لازيو روما",
							"ru": "Лацио"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"awayScore": {
					"current": 3,
					"display": 3,
					"period1": 3,
					"period2": 0,
					"normaltime": 3
				},
				"coverage": -1,
				"time": {
					"injuryTime1": 1,
					"injuryTime2": 4,
					"currentPeriodStartTimestamp": 1727294522
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727297510
				},
				"hasGlobalHighlights": false,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12764275,
				"homeRedCards": 1,
				"awayRedCards": 1,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727290800,
				"slug": "dynamo-kyiv-lazio",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "UEFA Europa League",
					"slug": "uefa-europa-league",
					"category": {
						"name": "Europe",
						"slug": "europe",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 1465,
						"country": {},
						"flag": "europe"
					},
					"uniqueTournament": {
						"name": "UEFA Europa League",
						"slug": "uefa-europa-league",
						"category": {
							"name": "Europe",
							"slug": "europe",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 1465,
							"country": {},
							"flag": "europe"
						},
						"userCount": 789538,
						"crowdsourcingEnabled": false,
						"hasPerformanceGraphFeature": false,
						"id": 679,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 138315
				},
				"season": {
					"name": "UEFA Europa League 24/25",
					"year": "24/25",
					"editor": false,
					"seasonCoverageInfo": {},
					"id": 61645
				},
				"roundInfo": {
					"round": 1
				},
				"customId": "OAsubb",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 3,
				"homeTeam": {
					"name": "FC Midtjylland",
					"slug": "fc-midtjylland",
					"shortName": "Midtjylland",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 119925,
					"nameCode": "FCM",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 1289,
					"country": {
						"alpha2": "DK",
						"alpha3": "DNK",
						"name": "Denmark"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "إف سي ميدتجيللاند",
							"ru": "Мидтьюлланн"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "TSG Hoffenheim",
					"slug": "tsg-hoffenheim",
					"shortName": "Hoffenheim",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 115214,
					"nameCode": "TSG",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 2569,
					"country": {
						"alpha2": "DE",
						"alpha3": "DEU",
						"name": "Germany"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "نادي هوفنهايم",
							"ru": "Хоффенхайм"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 1,
					"display": 1,
					"period1": 1,
					"period2": 0,
					"normaltime": 1
				},
				"awayScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"coverage": -1,
				"time": {
					"injuryTime1": 1,
					"injuryTime2": 4,
					"currentPeriodStartTimestamp": 1727294539
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727297541
				},
				"hasGlobalHighlights": false,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12764313,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727290800,
				"slug": "tsg-hoffenheim-fc-midtjylland",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "UEFA Europa League",
					"slug": "uefa-europa-league",
					"category": {
						"name": "Europe",
						"slug": "europe",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 1465,
						"country": {},
						"flag": "europe"
					},
					"uniqueTournament": {
						"name": "UEFA Europa League",
						"slug": "uefa-europa-league",
						"category": {
							"name": "Europe",
							"slug": "europe",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 1465,
							"country": {},
							"flag": "europe"
						},
						"userCount": 789538,
						"crowdsourcingEnabled": false,
						"hasPerformanceGraphFeature": false,
						"id": 679,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 138315
				},
				"season": {
					"name": "UEFA Europa League 24/25",
					"year": "24/25",
					"editor": false,
					"seasonCoverageInfo": {},
					"id": 61645
				},
				"roundInfo": {
					"round": 1
				},
				"customId": "llbsbpb",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "Galatasaray",
					"slug": "galatasaray",
					"shortName": "Galatasaray",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 718303,
					"nameCode": "GAL",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 3061,
					"country": {
						"alpha2": "TR",
						"alpha3": "TUR",
						"name": "Türkiye"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "غلطة سراي",
							"ru": "Галатасарай"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "PAOK",
					"slug": "paok",
					"shortName": "PAOK",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 190084,
					"nameCode": "PAOK",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 3251,
					"country": {
						"alpha2": "GR",
						"alpha3": "GRC",
						"name": "Greece"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "باوك ثيسالونيكي",
							"ru": "ПАОК"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 3,
					"display": 3,
					"period1": 0,
					"period2": 3,
					"normaltime": 3
				},
				"awayScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"coverage": -1,
				"time": {
					"injuryTime1": 1,
					"injuryTime2": 5,
					"currentPeriodStartTimestamp": 1727294622
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime"
					],
					"changeTimestamp": 1727297694
				},
				"hasGlobalHighlights": false,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12764254,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727290800,
				"slug": "paok-galatasaray",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "UEFA Europa League",
					"slug": "uefa-europa-league",
					"category": {
						"name": "Europe",
						"slug": "europe",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 1465,
						"country": {},
						"flag": "europe"
					},
					"uniqueTournament": {
						"name": "UEFA Europa League",
						"slug": "uefa-europa-league",
						"category": {
							"name": "Europe",
							"slug": "europe",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 1465,
							"country": {},
							"flag": "europe"
						},
						"userCount": 789538,
						"crowdsourcingEnabled": false,
						"hasPerformanceGraphFeature": false,
						"id": 679,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 138315
				},
				"season": {
					"name": "UEFA Europa League 24/25",
					"year": "24/25",
					"editor": false,
					"seasonCoverageInfo": {},
					"id": 61645
				},
				"roundInfo": {
					"round": 1
				},
				"customId": "qUsPBr",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "Ludogorets",
					"slug": "ludogorets",
					"shortName": "Ludogorets",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 113192,
					"nameCode": "LUD",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 43840,
					"country": {
						"alpha2": "BG",
						"alpha3": "BGR",
						"name": "Bulgaria"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "لودو جوريتس 1945 راز جراد",
							"ru": "Лудогорец Разград"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Slavia Praha",
					"slug": "slavia-praha",
					"shortName": "Slavia Praha",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 136006,
					"nameCode": "SLA",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 2216,
					"country": {
						"alpha2": "CZ",
						"alpha3": "CZE",
						"name": "Czechia"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "سلافيا براغ",
							"ru": "Славия Прага"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"awayScore": {
					"current": 2,
					"display": 2,
					"period1": 1,
					"period2": 1,
					"normaltime": 2
				},
				"coverage": -1,
				"time": {
					"injuryTime1": 2,
					"injuryTime2": 4,
					"currentPeriodStartTimestamp": 1727294747
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727297697
				},
				"hasGlobalHighlights": false,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12764230,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727290800,
				"slug": "ludogorets-slavia-praha",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "UEFA Europa League",
					"slug": "uefa-europa-league",
					"category": {
						"name": "Europe",
						"slug": "europe",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 1465,
						"country": {},
						"flag": "europe"
					},
					"uniqueTournament": {
						"name": "UEFA Europa League",
						"slug": "uefa-europa-league",
						"category": {
							"name": "Europe",
							"slug": "europe",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 1465,
							"country": {},
							"flag": "europe"
						},
						"userCount": 789538,
						"crowdsourcingEnabled": false,
						"hasPerformanceGraphFeature": false,
						"id": 679,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 138315
				},
				"season": {
					"name": "UEFA Europa League 24/25",
					"year": "24/25",
					"editor": false,
					"seasonCoverageInfo": {},
					"id": 61645
				},
				"roundInfo": {
					"round": 1
				},
				"customId": "Ksfjb",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 3,
				"homeTeam": {
					"name": "Manchester United",
					"slug": "manchester-united",
					"shortName": "Man Utd",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 2660164,
					"nameCode": "MUN",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 35,
					"country": {
						"alpha2": "EN",
						"alpha3": "ENG",
						"name": "England"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "مانتشستر يونايتد",
							"ru": "Манчестер Юнайтед"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "FC Twente",
					"slug": "fc-twente",
					"shortName": "Twente",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 108807,
					"nameCode": "TWE",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 2955,
					"country": {
						"alpha2": "NL",
						"alpha3": "NLD",
						"name": "Netherlands"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "تفينتي أنشخيده",
							"ru": "Твенте Энсхеде"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 1,
					"display": 1,
					"period1": 1,
					"period2": 0,
					"normaltime": 1
				},
				"awayScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"coverage": -1,
				"time": {
					"injuryTime1": 0,
					"injuryTime2": 4,
					"currentPeriodStartTimestamp": 1727294490
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727297478
				},
				"hasGlobalHighlights": false,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12764079,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727290800,
				"slug": "fc-twente-manchester-united",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "UEFA Europa League",
					"slug": "uefa-europa-league",
					"category": {
						"name": "Europe",
						"slug": "europe",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 1465,
						"country": {},
						"flag": "europe"
					},
					"uniqueTournament": {
						"name": "UEFA Europa League",
						"slug": "uefa-europa-league",
						"category": {
							"name": "Europe",
							"slug": "europe",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 1465,
							"country": {},
							"flag": "europe"
						},
						"userCount": 789538,
						"crowdsourcingEnabled": false,
						"hasPerformanceGraphFeature": false,
						"id": 679,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 138315
				},
				"season": {
					"name": "UEFA Europa League 24/25",
					"year": "24/25",
					"editor": false,
					"seasonCoverageInfo": {},
					"id": 61645
				},
				"roundInfo": {
					"round": 1
				},
				"customId": "lIszgb",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 3,
				"homeTeam": {
					"name": "Nice",
					"slug": "nice",
					"shortName": "Nice",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 198857,
					"nameCode": "OGCN",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 1661,
					"country": {
						"alpha2": "FR",
						"alpha3": "FRA",
						"name": "France"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "نادي نيس",
							"ru": "Ницца"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Real Sociedad",
					"slug": "real-sociedad",
					"shortName": "Real Sociedad",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 493740,
					"nameCode": "RSO",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 2824,
					"country": {
						"alpha2": "ES",
						"alpha3": "ESP",
						"name": "Spain"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "ريال سوسيداد",
							"ru": "Реал Сосьедад"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 1,
					"display": 1,
					"period1": 1,
					"period2": 0,
					"normaltime": 1
				},
				"awayScore": {
					"current": 1,
					"display": 1,
					"period1": 1,
					"period2": 0,
					"normaltime": 1
				},
				"coverage": -1,
				"time": {
					"injuryTime1": 2,
					"injuryTime2": 5,
					"currentPeriodStartTimestamp": 1727294654
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727297663
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12764344,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727290800,
				"slug": "real-sociedad-nice",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "UEFA Europa League",
					"slug": "uefa-europa-league",
					"category": {
						"name": "Europe",
						"slug": "europe",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 1465,
						"country": {},
						"flag": "europe"
					},
					"uniqueTournament": {
						"name": "UEFA Europa League",
						"slug": "uefa-europa-league",
						"category": {
							"name": "Europe",
							"slug": "europe",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 1465,
							"country": {},
							"flag": "europe"
						},
						"userCount": 789538,
						"crowdsourcingEnabled": false,
						"hasPerformanceGraphFeature": false,
						"id": 679,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 138315
				},
				"season": {
					"name": "UEFA Europa League 24/25",
					"year": "24/25",
					"editor": false,
					"seasonCoverageInfo": {},
					"id": 61645
				},
				"roundInfo": {
					"round": 1
				},
				"customId": "ANsaib",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "RSC Anderlecht",
					"slug": "anderlecht",
					"shortName": "Anderlecht",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 114491,
					"nameCode": "AND",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 2900,
					"country": {
						"alpha2": "BE",
						"alpha3": "BEL",
						"name": "Belgium"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "أندرلخت",
							"ru": "Андерлехт"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Ferencváros TC",
					"slug": "ferencvaros-tc",
					"shortName": "Ferencváros",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 112200,
					"nameCode": "FTC",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 1925,
					"country": {
						"alpha2": "HU",
						"alpha3": "HUN",
						"name": "Hungary"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "فيرينكفاروسي بودابست",
							"ru": "Ференцварош"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 2,
					"display": 2,
					"period1": 0,
					"period2": 2,
					"normaltime": 2
				},
				"awayScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"coverage": -1,
				"time": {
					"injuryTime1": 2,
					"injuryTime2": 4,
					"currentPeriodStartTimestamp": 1727294540
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727297579
				},
				"hasGlobalHighlights": false,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12764342,
				"homeRedCards": 1,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727290800,
				"slug": "rsc-anderlecht-ferencvaros-tc",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Veikkausliiga, Championship Round",
					"slug": "veikkausliiga-championship-round",
					"category": {
						"name": "Finland",
						"slug": "finland",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 19,
						"country": {
							"alpha2": "FI",
							"alpha3": "FIN",
							"name": "Finland"
						},
						"flag": "finland",
						"alpha2": "FI"
					},
					"uniqueTournament": {
						"name": "Veikkausliiga",
						"slug": "veikkausliiga",
						"category": {
							"name": "Finland",
							"slug": "finland",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 19,
							"country": {
								"alpha2": "FI",
								"alpha3": "FIN",
								"name": "Finland"
							},
							"flag": "finland",
							"alpha2": "FI"
						},
						"userCount": 11348,
						"id": 41,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 75358
				},
				"season": {
					"name": "Veikkausliiga 2024",
					"year": "2024",
					"editor": false,
					"id": 57896
				},
				"customId": "UUsLXi",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "Ilves",
					"slug": "ilves",
					"shortName": "Ilves",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 9942,
					"nameCode": "ILV",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 22386,
					"country": {
						"alpha2": "FI",
						"alpha3": "FIN",
						"name": "Finland"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "تامبيرين إيلفيس",
							"ru": "Ильвес"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "KuPS",
					"slug": "kups",
					"shortName": "KuPS",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 18691,
					"nameCode": "KUPS",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 2244,
					"country": {
						"alpha2": "FI",
						"alpha3": "FIN",
						"name": "Finland"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "كووبيون بالوسيورا",
							"ru": "Куопион Паллосеура"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 1,
					"display": 1,
					"period1": 1,
					"period2": 0,
					"normaltime": 1
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"injuryTime2": 4,
					"currentPeriodStartTimestamp": 1727200414
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727200417
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12789096,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727193600,
				"slug": "ilves-kups",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Veikkausliiga, Relegation Round",
					"slug": "veikkausliiga-relegation-round",
					"category": {
						"name": "Finland",
						"slug": "finland",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 19,
						"country": {
							"alpha2": "FI",
							"alpha3": "FIN",
							"name": "Finland"
						},
						"flag": "finland",
						"alpha2": "FI"
					},
					"uniqueTournament": {
						"name": "Veikkausliiga",
						"slug": "veikkausliiga",
						"category": {
							"name": "Finland",
							"slug": "finland",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 19,
							"country": {
								"alpha2": "FI",
								"alpha3": "FIN",
								"name": "Finland"
							},
							"flag": "finland",
							"alpha2": "FI"
						},
						"userCount": 11348,
						"id": 41,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 75354
				},
				"season": {
					"name": "Veikkausliiga 2024",
					"year": "2024",
					"editor": false,
					"id": 57896
				},
				"roundInfo": {
					"round": 2
				},
				"customId": "XUsocc",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "AC Oulu",
					"slug": "ac-oulu",
					"shortName": "Oulu",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 7818,
					"nameCode": "ACO",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 5114,
					"country": {
						"alpha2": "FI",
						"alpha3": "FIN",
						"name": "Finland"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "أي سي أولو",
							"ru": "Оулу"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Inter Turku",
					"slug": "inter-turku",
					"shortName": "Inter",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 14303,
					"nameCode": "INT",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 2247,
					"country": {
						"alpha2": "FI",
						"alpha3": "FIN",
						"name": "Finland"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "إف سي انتر توركو",
							"ru": "ФК Интер Турку"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 1,
					"display": 1,
					"period1": 1,
					"period2": 0,
					"normaltime": 1
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"injuryTime1": 1,
					"injuryTime2": 4,
					"currentPeriodStartTimestamp": 1727196866
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727196868
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12789117,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727190000,
				"slug": "ac-oulu-inter-turku",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Erovnuli Liga",
					"slug": "erovnuli-liga",
					"category": {
						"name": "Georgia",
						"slug": "georgia",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 270,
						"country": {
							"alpha2": "GE",
							"alpha3": "GEO",
							"name": "Georgia"
						},
						"flag": "georgia",
						"alpha2": "GE"
					},
					"uniqueTournament": {
						"name": "Erovnuli Liga",
						"slug": "erovnuli-liga",
						"category": {
							"name": "Georgia",
							"slug": "georgia",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 270,
							"country": {
								"alpha2": "GE",
								"alpha3": "GEO",
								"name": "Georgia"
							},
							"flag": "georgia",
							"alpha2": "GE"
						},
						"userCount": 4337,
						"id": 704,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 3012
				},
				"season": {
					"name": "Erovnuli Liga 2024",
					"year": "2024",
					"editor": false,
					"id": 57889
				},
				"roundInfo": {
					"round": 26
				},
				"customId": "qMosCRbc",
				"status": {
					"code": 0,
					"description": "Not started",
					"type": "notstarted"
				},
				"homeTeam": {
					"name": "FC Samtredia",
					"slug": "fc-samtredia",
					"shortName": "Samtredia",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 2923,
					"nameCode": "SAM",
					"national": false,
					"type": 0,
					"id": 36866,
					"country": {
						"alpha2": "GE",
						"alpha3": "GEO",
						"name": "Georgia"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "إف سي سامتريديا",
							"ru": "ФК Самтредия"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "FC Telavi",
					"slug": "fc-telavi",
					"shortName": "Telavi",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 2717,
					"nameCode": "TEL",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 254627,
					"country": {
						"alpha2": "GE",
						"alpha3": "GEO",
						"name": "Georgia"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "كاخيتي تيلاڢي",
							"ru": "Какхети Телави"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {},
				"awayScore": {},
				"time": {},
				"changes": {
					"changeTimestamp": 0
				},
				"hasGlobalHighlights": false,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12799446,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727350200,
				"slug": "fc-telavi-fc-samtredia",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "3. Liga",
					"slug": "3-liga",
					"category": {
						"name": "Germany",
						"slug": "germany",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 30,
						"country": {
							"alpha2": "DE",
							"alpha3": "DEU",
							"name": "Germany"
						},
						"flag": "germany",
						"alpha2": "DE"
					},
					"uniqueTournament": {
						"name": "3. Liga",
						"slug": "3-liga",
						"category": {
							"name": "Germany",
							"slug": "germany",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 30,
							"country": {
								"alpha2": "DE",
								"alpha3": "DEU",
								"name": "Germany"
							},
							"flag": "germany",
							"alpha2": "DE"
						},
						"userCount": 20132,
						"id": 491,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 8343
				},
				"season": {
					"name": "3. Liga 24/25",
					"year": "24/25",
					"editor": false,
					"id": 63786
				},
				"roundInfo": {
					"round": 7
				},
				"customId": "qbbsXbb",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "Erzgebirge Aue",
					"slug": "erzgebirge-aue",
					"shortName": "Aue",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 7993,
					"nameCode": "ERZ",
					"national": false,
					"type": 0,
					"id": 2566,
					"country": {
						"alpha2": "DE",
						"alpha3": "DEU",
						"name": "Germany"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "أف سى ارتسغبيرغه",
							"ru": "Эрцгебирге"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "SV Wehen Wiesbaden",
					"slug": "sv-wehen-wiesbaden",
					"shortName": "Wehen",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 12078,
					"nameCode": "WEH",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 2597,
					"country": {
						"alpha2": "DE",
						"alpha3": "DEU",
						"name": "Germany"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Веен"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 2,
					"display": 2,
					"period1": 2,
					"period2": 0,
					"normaltime": 2
				},
				"awayScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"time": {
					"injuryTime1": 2,
					"injuryTime2": 5,
					"currentPeriodStartTimestamp": 1727203998
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727204001
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12525983,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727197200,
				"slug": "sv-wehen-wiesbaden-erzgebirge-aue",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "3. Liga",
					"slug": "3-liga",
					"category": {
						"name": "Germany",
						"slug": "germany",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 30,
						"country": {
							"alpha2": "DE",
							"alpha3": "DEU",
							"name": "Germany"
						},
						"flag": "germany",
						"alpha2": "DE"
					},
					"uniqueTournament": {
						"name": "3. Liga",
						"slug": "3-liga",
						"category": {
							"name": "Germany",
							"slug": "germany",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 30,
							"country": {
								"alpha2": "DE",
								"alpha3": "DEU",
								"name": "Germany"
							},
							"flag": "germany",
							"alpha2": "DE"
						},
						"userCount": 20132,
						"id": 491,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 8343
				},
				"season": {
					"name": "3. Liga 24/25",
					"year": "24/25",
					"editor": false,
					"id": 63786
				},
				"roundInfo": {
					"round": 7
				},
				"customId": "Iabsfbb",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "F.C. Hansa Rostock",
					"slug": "fc-hansa-rostock",
					"shortName": "Rostock",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 13391,
					"nameCode": "HAN",
					"national": false,
					"type": 0,
					"id": 2533,
					"country": {
						"alpha2": "DE",
						"alpha3": "DEU",
						"name": "Germany"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "Hansa Rostock",
							"ru": "Ганза Росток"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "SpVgg Unterhaching",
					"slug": "spvgg-unterhaching",
					"shortName": "Unterhaching",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 4920,
					"nameCode": "UHA",
					"national": false,
					"type": 0,
					"id": 2555,
					"country": {
						"alpha2": "DE",
						"alpha3": "DEU",
						"name": "Germany"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "أونترهاخنغ",
							"ru": "Унтерхахинг"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 4,
					"display": 4,
					"period1": 2,
					"period2": 2,
					"normaltime": 4
				},
				"awayScore": {
					"current": 1,
					"display": 1,
					"period1": 1,
					"period2": 0,
					"normaltime": 1
				},
				"time": {
					"injuryTime1": 11,
					"injuryTime2": 7,
					"currentPeriodStartTimestamp": 1727204710
				},
				"changes": {
					"changes": [
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime"
					],
					"changeTimestamp": 1727204822
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12525972,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727197200,
				"slug": "spvgg-unterhaching-fc-hansa-rostock",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "3. Liga",
					"slug": "3-liga",
					"category": {
						"name": "Germany",
						"slug": "germany",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 30,
						"country": {
							"alpha2": "DE",
							"alpha3": "DEU",
							"name": "Germany"
						},
						"flag": "germany",
						"alpha2": "DE"
					},
					"uniqueTournament": {
						"name": "3. Liga",
						"slug": "3-liga",
						"category": {
							"name": "Germany",
							"slug": "germany",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 30,
							"country": {
								"alpha2": "DE",
								"alpha3": "DEU",
								"name": "Germany"
							},
							"flag": "germany",
							"alpha2": "DE"
						},
						"userCount": 20132,
						"id": 491,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 8343
				},
				"season": {
					"name": "3. Liga 24/25",
					"year": "24/25",
					"editor": false,
					"id": 63786
				},
				"roundInfo": {
					"round": 7
				},
				"customId": "Frcshyc",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "SV Sandhausen",
					"slug": "sv-sandhausen",
					"shortName": "Sandhausen",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 7419,
					"nameCode": "SVS",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 6157,
					"country": {
						"alpha2": "DE",
						"alpha3": "DEU",
						"name": "Germany"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "إس في ساندوسين",
							"ru": "Зандхаузен"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "FC Ingolstadt 04",
					"slug": "fc-ingolstadt-04",
					"shortName": "Ingolstadt",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 7816,
					"nameCode": "FCI",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 5880,
					"country": {
						"alpha2": "DE",
						"alpha3": "DEU",
						"name": "Germany"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "إينجولستادت",
							"ru": "Ингольштадт 04"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 4,
					"display": 4,
					"period1": 1,
					"period2": 3,
					"normaltime": 4
				},
				"awayScore": {
					"current": 3,
					"display": 3,
					"period1": 1,
					"period2": 2,
					"normaltime": 3
				},
				"time": {
					"injuryTime1": 1,
					"injuryTime2": 4,
					"currentPeriodStartTimestamp": 1727203868
				},
				"changes": {
					"changes": [
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime"
					],
					"changeTimestamp": 1727203937
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12525980,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727197200,
				"slug": "sv-sandhausen-fc-ingolstadt-04",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "3. Liga",
					"slug": "3-liga",
					"category": {
						"name": "Germany",
						"slug": "germany",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 30,
						"country": {
							"alpha2": "DE",
							"alpha3": "DEU",
							"name": "Germany"
						},
						"flag": "germany",
						"alpha2": "DE"
					},
					"uniqueTournament": {
						"name": "3. Liga",
						"slug": "3-liga",
						"category": {
							"name": "Germany",
							"slug": "germany",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 30,
							"country": {
								"alpha2": "DE",
								"alpha3": "DEU",
								"name": "Germany"
							},
							"flag": "germany",
							"alpha2": "DE"
						},
						"userCount": 20132,
						"id": 491,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 8343
				},
				"season": {
					"name": "3. Liga 24/25",
					"year": "24/25",
					"editor": false,
					"id": 63786
				},
				"roundInfo": {
					"round": 7
				},
				"customId": "xabsPab",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "VfB Stuttgart II",
					"slug": "vfb-stuttgart-ii-u21",
					"shortName": "Stuttgart II",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 2994,
					"nameCode": "VFB",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 2522,
					"country": {
						"alpha2": "DE",
						"alpha3": "DEU",
						"name": "Germany"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "ВФБ Штутгарт II"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Arminia Bielefeld",
					"slug": "arminia-bielefeld",
					"shortName": "Bielefeld",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 13984,
					"nameCode": "ARM",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 2540,
					"country": {
						"alpha2": "DE",
						"alpha3": "DEU",
						"name": "Germany"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "Arminia Bielefeld",
							"ru": "Арминия"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 3,
					"display": 3,
					"period1": 2,
					"period2": 1,
					"normaltime": 3
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"injuryTime1": 2,
					"injuryTime2": 4,
					"currentPeriodStartTimestamp": 1727204023
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727204027
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12525982,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727197200,
				"slug": "arminia-bielefeld-vfb-stuttgart-ii",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "3. Liga",
					"slug": "3-liga",
					"category": {
						"name": "Germany",
						"slug": "germany",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 30,
						"country": {
							"alpha2": "DE",
							"alpha3": "DEU",
							"name": "Germany"
						},
						"flag": "germany",
						"alpha2": "DE"
					},
					"uniqueTournament": {
						"name": "3. Liga",
						"slug": "3-liga",
						"category": {
							"name": "Germany",
							"slug": "germany",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 30,
							"country": {
								"alpha2": "DE",
								"alpha3": "DEU",
								"name": "Germany"
							},
							"flag": "germany",
							"alpha2": "DE"
						},
						"userCount": 20132,
						"id": 491,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 8343
				},
				"season": {
					"name": "3. Liga 24/25",
					"year": "24/25",
					"editor": false,
					"id": 63786
				},
				"roundInfo": {
					"round": 7
				},
				"customId": "HabsGbb",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "VfL Osnabrück",
					"slug": "vfl-osnabruck",
					"shortName": "Osnabrück",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 11096,
					"nameCode": "OSN",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 2581,
					"country": {
						"alpha2": "DE",
						"alpha3": "DEU",
						"name": "Germany"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "ВФЛ Оснабрюк"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Energie Cottbus",
					"slug": "energie-cottbus",
					"shortName": "Cottbus",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 6186,
					"nameCode": "COT",
					"national": false,
					"type": 0,
					"id": 2532,
					"country": {
						"alpha2": "DE",
						"alpha3": "DEU",
						"name": "Germany"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "اينرجي كوتباس",
							"ru": "Энергия Коттбус"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 2,
					"display": 2,
					"period1": 1,
					"period2": 1,
					"normaltime": 2
				},
				"awayScore": {
					"current": 5,
					"display": 5,
					"period1": 2,
					"period2": 3,
					"normaltime": 5
				},
				"time": {
					"injuryTime1": 2,
					"injuryTime2": 4,
					"currentPeriodStartTimestamp": 1727203985
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727203987
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12525976,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727197200,
				"slug": "vfl-osnabruck-energie-cottbus",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "3. Liga",
					"slug": "3-liga",
					"category": {
						"name": "Germany",
						"slug": "germany",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 30,
						"country": {
							"alpha2": "DE",
							"alpha3": "DEU",
							"name": "Germany"
						},
						"flag": "germany",
						"alpha2": "DE"
					},
					"uniqueTournament": {
						"name": "3. Liga",
						"slug": "3-liga",
						"category": {
							"name": "Germany",
							"slug": "germany",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 30,
							"country": {
								"alpha2": "DE",
								"alpha3": "DEU",
								"name": "Germany"
							},
							"flag": "germany",
							"alpha2": "DE"
						},
						"userCount": 20132,
						"id": 491,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 8343
				},
				"season": {
					"name": "3. Liga 24/25",
					"year": "24/25",
					"editor": false,
					"id": 63786
				},
				"roundInfo": {
					"round": 7
				},
				"customId": "ebbsprw",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "1. FC Saarbrücken",
					"slug": "1-fc-saarbrucken",
					"shortName": "Saarbrücken",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 12312,
					"nameCode": "FCS",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 2554,
					"country": {
						"alpha2": "DE",
						"alpha3": "DEU",
						"name": "Germany"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "١. إف سي سااربروكن"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "FC Viktoria Köln",
					"slug": "fc-viktoria-koln",
					"shortName": "Viktoria Köln",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 5764,
					"nameCode": "VIK",
					"national": false,
					"type": 0,
					"id": 53365,
					"country": {
						"alpha2": "DE",
						"alpha3": "DEU",
						"name": "Germany"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Виктория Кёльн"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"injuryTime1": 2,
					"injuryTime2": 3,
					"currentPeriodStartTimestamp": 1727290255
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727290258
				},
				"hasGlobalHighlights": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12525975,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727283600,
				"slug": "fc-viktoria-koln-1-fc-saarbrucken",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "3. Liga",
					"slug": "3-liga",
					"category": {
						"name": "Germany",
						"slug": "germany",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 30,
						"country": {
							"alpha2": "DE",
							"alpha3": "DEU",
							"name": "Germany"
						},
						"flag": "germany",
						"alpha2": "DE"
					},
					"uniqueTournament": {
						"name": "3. Liga",
						"slug": "3-liga",
						"category": {
							"name": "Germany",
							"slug": "germany",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 30,
							"country": {
								"alpha2": "DE",
								"alpha3": "DEU",
								"name": "Germany"
							},
							"flag": "germany",
							"alpha2": "DE"
						},
						"userCount": 20132,
						"id": 491,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 8343
				},
				"season": {
					"name": "3. Liga 24/25",
					"year": "24/25",
					"editor": false,
					"id": 63786
				},
				"roundInfo": {
					"round": 7
				},
				"customId": "WabsFdb",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 3,
				"homeTeam": {
					"name": "Alemannia Aachen",
					"slug": "alemannia-aachen",
					"shortName": "Aachen",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 4375,
					"nameCode": "AAC",
					"national": false,
					"type": 0,
					"id": 2546,
					"country": {
						"alpha2": "DE",
						"alpha3": "DEU",
						"name": "Germany"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "تي إس في المانيا آهن",
							"ru": "Алемания Аахен"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "SV Waldhof Mannheim",
					"slug": "sv-waldhof-mannheim",
					"shortName": "Mannheim",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 6465,
					"nameCode": "WAM",
					"national": false,
					"type": 0,
					"id": 2680,
					"country": {
						"alpha2": "DE",
						"alpha3": "DEU",
						"name": "Germany"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Вальдхоф Мангейм"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"injuryTime2": 3,
					"currentPeriodStartTimestamp": 1727290289
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727290291
				},
				"hasGlobalHighlights": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12525981,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727283600,
				"slug": "sv-waldhof-mannheim-alemannia-aachen",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "3. Liga",
					"slug": "3-liga",
					"category": {
						"name": "Germany",
						"slug": "germany",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 30,
						"country": {
							"alpha2": "DE",
							"alpha3": "DEU",
							"name": "Germany"
						},
						"flag": "germany",
						"alpha2": "DE"
					},
					"uniqueTournament": {
						"name": "3. Liga",
						"slug": "3-liga",
						"category": {
							"name": "Germany",
							"slug": "germany",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 30,
							"country": {
								"alpha2": "DE",
								"alpha3": "DEU",
								"name": "Germany"
							},
							"flag": "germany",
							"alpha2": "DE"
						},
						"userCount": 20132,
						"id": 491,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 8343
				},
				"season": {
					"name": "3. Liga 24/25",
					"year": "24/25",
					"editor": false,
					"id": 63786
				},
				"roundInfo": {
					"round": 7
				},
				"customId": "Kabsmbb",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "Rot-Weiss Essen",
					"slug": "rot-weiss-essen",
					"shortName": "RW Essen",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 8113,
					"nameCode": "RWE",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 2562,
					"country": {
						"alpha2": "DE",
						"alpha3": "DEU",
						"name": "Germany"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "روت-وايس إسين",
							"ru": "Рот Вайсс Эссен"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Borussia Dortmund II",
					"slug": "borussia-dortmund-ii-u23",
					"shortName": "Dortmund II",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 11191,
					"nameCode": "BVB",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 2535,
					"country": {
						"alpha2": "DE",
						"alpha3": "DEU",
						"name": "Germany"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "بورسيا دورتمند هواة",
							"ru": "Боруссия Дортмунд II"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 3,
					"display": 3,
					"period1": 3,
					"period2": 0,
					"normaltime": 3
				},
				"awayScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"time": {
					"injuryTime1": 3,
					"injuryTime2": 4,
					"currentPeriodStartTimestamp": 1727290380
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727290384
				},
				"hasGlobalHighlights": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12525977,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727283600,
				"slug": "rot-weiss-essen-borussia-dortmund-ii",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "3. Liga",
					"slug": "3-liga",
					"category": {
						"name": "Germany",
						"slug": "germany",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 30,
						"country": {
							"alpha2": "DE",
							"alpha3": "DEU",
							"name": "Germany"
						},
						"flag": "germany",
						"alpha2": "DE"
					},
					"uniqueTournament": {
						"name": "3. Liga",
						"slug": "3-liga",
						"category": {
							"name": "Germany",
							"slug": "germany",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 30,
							"country": {
								"alpha2": "DE",
								"alpha3": "DEU",
								"name": "Germany"
							},
							"flag": "germany",
							"alpha2": "DE"
						},
						"userCount": 20132,
						"id": 491,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 8343
				},
				"season": {
					"name": "3. Liga 24/25",
					"year": "24/25",
					"editor": false,
					"id": 63786
				},
				"roundInfo": {
					"round": 7
				},
				"customId": "TbbsVbb",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "SC Verl",
					"slug": "sc-verl",
					"shortName": "Verl",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 5398,
					"nameCode": "SCV",
					"national": false,
					"type": 0,
					"id": 2593,
					"country": {
						"alpha2": "DE",
						"alpha3": "DEU",
						"name": "Germany"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "إس سي فيرل",
							"ru": "CК Верл"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "SG Dynamo Dresden",
					"slug": "sg-dynamo-dresden",
					"shortName": "Dresden",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 17524,
					"nameCode": "SGD",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 2595,
					"country": {
						"alpha2": "DE",
						"alpha3": "DEU",
						"name": "Germany"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "Dynamo Dresden",
							"ru": "Динамо Дрезден"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"awayScore": {
					"current": 3,
					"display": 3,
					"period1": 2,
					"period2": 1,
					"normaltime": 3
				},
				"time": {
					"injuryTime1": 2,
					"currentPeriodStartTimestamp": 1727290576
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727290579
				},
				"hasGlobalHighlights": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12525973,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727283600,
				"slug": "sg-dynamo-dresden-sc-verl",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "3. Liga",
					"slug": "3-liga",
					"category": {
						"name": "Germany",
						"slug": "germany",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 30,
						"country": {
							"alpha2": "DE",
							"alpha3": "DEU",
							"name": "Germany"
						},
						"flag": "germany",
						"alpha2": "DE"
					},
					"uniqueTournament": {
						"name": "3. Liga",
						"slug": "3-liga",
						"category": {
							"name": "Germany",
							"slug": "germany",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 30,
							"country": {
								"alpha2": "DE",
								"alpha3": "DEU",
								"name": "Germany"
							},
							"flag": "germany",
							"alpha2": "DE"
						},
						"userCount": 20132,
						"id": 491,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 8343
				},
				"season": {
					"name": "3. Liga 24/25",
					"year": "24/25",
					"editor": false,
					"id": 63786
				},
				"roundInfo": {
					"round": 7
				},
				"customId": "Labsbqc",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "TSV 1860 München",
					"slug": "tsv-1860-munchen",
					"shortName": "1860 München",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 13938,
					"nameCode": "M60",
					"national": false,
					"type": 0,
					"id": 2536,
					"country": {
						"alpha2": "DE",
						"alpha3": "DEU",
						"name": "Germany"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "ميونخ",
							"ru": "1860 Мюнхен"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Hannover 96 II",
					"slug": "hannover-96-ii-u23",
					"shortName": "Hannover II",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 3809,
					"nameCode": "H96",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 5801,
					"country": {
						"alpha2": "DE",
						"alpha3": "DEU",
						"name": "Germany"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "هانوفر ٩٦ ٢",
							"ru": "Ганновер 96 II"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 1,
					"display": 1,
					"period1": 1,
					"period2": 0,
					"normaltime": 1
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"injuryTime1": 2,
					"injuryTime2": 4,
					"currentPeriodStartTimestamp": 1727290398
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727290401
				},
				"hasGlobalHighlights": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12525978,
				"homeRedCards": 1,
				"awayRedCards": 1,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727283600,
				"slug": "hannover-96-ii-tsv-1860-munchen",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Regionalliga Southwest",
					"slug": "regionalliga-southwest",
					"category": {
						"name": "Germany Amateur",
						"slug": "germany-amateur",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 122,
						"country": {
							"alpha2": "DE",
							"alpha3": "DEU",
							"name": "Germany"
						},
						"flag": "germany",
						"alpha2": "DE"
					},
					"uniqueTournament": {
						"name": "Regionalliga Südwest",
						"slug": "regionalliga-sudwest",
						"category": {
							"name": "Germany Amateur",
							"slug": "germany-amateur",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 122,
							"country": {
								"alpha2": "DE",
								"alpha3": "DEU",
								"name": "Germany"
							},
							"flag": "germany",
							"alpha2": "DE"
						},
						"userCount": 1959,
						"id": 1079,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 21300
				},
				"season": {
					"name": "Regionalliga Southwest 24/25",
					"year": "24/25",
					"editor": false,
					"id": 63815
				},
				"roundInfo": {
					"round": 7
				},
				"customId": "wbbsrHQb",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "1. FSV Mainz 05 II U23",
					"slug": "1-fsv-mainz-05-ii-u23",
					"shortName": "Mainz II U23",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 1612,
					"nameCode": "M05",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 2571,
					"country": {
						"alpha2": "DE",
						"alpha3": "DEU",
						"name": "Germany"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					}
				},
				"awayTeam": {
					"name": "1. Göppinger SV",
					"slug": "1-goppinger-sv",
					"shortName": "1. Göppinger SV",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 1241,
					"nameCode": "GOP",
					"national": false,
					"type": 0,
					"id": 229117,
					"country": {
						"alpha2": "DE",
						"alpha3": "DEU",
						"name": "Germany"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					}
				},
				"homeScore": {
					"current": 2,
					"display": 2,
					"period1": 1,
					"period2": 1,
					"normaltime": 2
				},
				"awayScore": {
					"current": 1,
					"display": 1,
					"period1": 1,
					"period2": 0,
					"normaltime": 1
				},
				"time": {
					"injuryTime1": 2,
					"injuryTime2": 4,
					"currentPeriodStartTimestamp": 1727204215
				},
				"changes": {
					"changes": [
						"cardsCode"
					],
					"changeTimestamp": 1727254441
				},
				"hasGlobalHighlights": false,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12780043,
				"awayRedCards": 1,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727197200,
				"slug": "1-goppinger-sv-1-fsv-mainz-05-ii-u23",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Regionalliga Southwest",
					"slug": "regionalliga-southwest",
					"category": {
						"name": "Germany Amateur",
						"slug": "germany-amateur",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 122,
						"country": {
							"alpha2": "DE",
							"alpha3": "DEU",
							"name": "Germany"
						},
						"flag": "germany",
						"alpha2": "DE"
					},
					"uniqueTournament": {
						"name": "Regionalliga Südwest",
						"slug": "regionalliga-sudwest",
						"category": {
							"name": "Germany Amateur",
							"slug": "germany-amateur",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 122,
							"country": {
								"alpha2": "DE",
								"alpha3": "DEU",
								"name": "Germany"
							},
							"flag": "germany",
							"alpha2": "DE"
						},
						"userCount": 1959,
						"id": 1079,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 21300
				},
				"season": {
					"name": "Regionalliga Southwest 24/25",
					"year": "24/25",
					"editor": false,
					"id": 63815
				},
				"roundInfo": {
					"round": 7
				},
				"customId": "VabsJFqc",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "Eintracht Frankfurt II",
					"slug": "eintracht-frankfurt-ii",
					"shortName": "Eintracht II",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 2679,
					"nameCode": "EFR",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 2545,
					"country": {
						"alpha2": "DE",
						"alpha3": "DEU",
						"name": "Germany"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "هواة  إنتراخت فرانكفورت",
							"ru": "Айнтрахт Франкфурт II"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "FC Gießen",
					"slug": "fc-giessen",
					"shortName": "FC Gießen",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 1615,
					"nameCode": "GIE",
					"national": false,
					"type": 0,
					"id": 291534,
					"country": {
						"alpha2": "DE",
						"alpha3": "DEU",
						"name": "Germany"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					}
				},
				"homeScore": {
					"current": 3,
					"display": 3,
					"period1": 2,
					"period2": 1,
					"normaltime": 3
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"injuryTime1": 1,
					"injuryTime2": 2,
					"currentPeriodStartTimestamp": 1727204095
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727204098
				},
				"hasGlobalHighlights": false,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12830493,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727197200,
				"slug": "fc-giessen-eintracht-frankfurt-ii",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Efsta deild, Championship Round",
					"slug": "efsta-deild-championship-round",
					"category": {
						"name": "Iceland",
						"slug": "iceland",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 10,
						"country": {
							"alpha2": "IS",
							"alpha3": "ISL",
							"name": "Iceland"
						},
						"flag": "iceland",
						"alpha2": "IS"
					},
					"uniqueTournament": {
						"name": "Besta deild karla",
						"slug": "besta-deild-karla",
						"category": {
							"name": "Iceland",
							"slug": "iceland",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 10,
							"country": {
								"alpha2": "IS",
								"alpha3": "ISL",
								"name": "Iceland"
							},
							"flag": "iceland",
							"alpha2": "IS"
						},
						"userCount": 9594,
						"id": 188,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 97629
				},
				"season": {
					"name": "Besta deild 2024",
					"year": "2024",
					"editor": false,
					"id": 57370
				},
				"roundInfo": {
					"round": 1
				},
				"customId": "UMsiN",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "Víkingur Reykjavík",
					"slug": "vikingur-reykjavik",
					"shortName": "Víkingur",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 30165,
					"nameCode": "VIK",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 1908,
					"country": {
						"alpha2": "IS",
						"alpha3": "ISL",
						"name": "Iceland"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "فيكينجور ريكيافيك",
							"ru": "Викингур  Рейкьявик"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "FH Hafnarfjörður",
					"slug": "fh-hafnarfjordur",
					"shortName": "Hafnarfjörður",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 7381,
					"nameCode": "HAF",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 1894,
					"country": {
						"alpha2": "IS",
						"alpha3": "ISL",
						"name": "Iceland"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "هافنارفيوردور",
							"ru": "ФХ Хабнарфьордюр"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 3,
					"display": 3,
					"period1": 1,
					"period2": 2,
					"normaltime": 3
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"injuryTime1": 2,
					"injuryTime2": 5,
					"currentPeriodStartTimestamp": 1727298516
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727298520
				},
				"hasGlobalHighlights": false,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12868412,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727291700,
				"slug": "vikingur-reykjavik-fh-hafnarfjordur",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Efsta deild, Relegation Round",
					"slug": "efsta-deild-relegation-round",
					"category": {
						"name": "Iceland",
						"slug": "iceland",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 10,
						"country": {
							"alpha2": "IS",
							"alpha3": "ISL",
							"name": "Iceland"
						},
						"flag": "iceland",
						"alpha2": "IS"
					},
					"uniqueTournament": {
						"name": "Besta deild karla",
						"slug": "besta-deild-karla",
						"category": {
							"name": "Iceland",
							"slug": "iceland",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 10,
							"country": {
								"alpha2": "IS",
								"alpha3": "ISL",
								"name": "Iceland"
							},
							"flag": "iceland",
							"alpha2": "IS"
						},
						"userCount": 9594,
						"id": 188,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 106459
				},
				"season": {
					"name": "Besta deild 2024",
					"year": "2024",
					"editor": false,
					"id": 57370
				},
				"roundInfo": {
					"round": 1
				},
				"customId": "eNswRc",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 3,
				"homeTeam": {
					"name": "KA Akureyri",
					"slug": "ka-akureyri",
					"shortName": "KA Akureyri",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 7470,
					"nameCode": "AKU",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 1904,
					"country": {
						"alpha2": "IS",
						"alpha3": "ISL",
						"name": "Iceland"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "كيه . ايه اكيورياري",
							"ru": "КА Акюрейри"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "HK Kópavogur",
					"slug": "hk-kopavogur",
					"shortName": "Kópavogur",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 5904,
					"nameCode": "KOP",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 7121,
					"country": {
						"alpha2": "IS",
						"alpha3": "ISL",
						"name": "Iceland"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "ХК Копавогур"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 3,
					"display": 3,
					"period1": 1,
					"period2": 2,
					"normaltime": 3
				},
				"awayScore": {
					"current": 3,
					"display": 3,
					"period1": 2,
					"period2": 1,
					"normaltime": 3
				},
				"time": {
					"currentPeriodStartTimestamp": 1727287531
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727287534
				},
				"hasGlobalHighlights": false,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12868373,
				"awayRedCards": 1,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727280900,
				"slug": "hk-kopavogur-ka-akureyri",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Liga 1",
					"slug": "liga-1",
					"category": {
						"name": "Indonesia",
						"slug": "indonesia",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 368,
						"country": {
							"alpha2": "ID",
							"alpha3": "IDN",
							"name": "Indonesia"
						},
						"flag": "indonesia",
						"alpha2": "ID"
					},
					"uniqueTournament": {
						"name": "Liga 1",
						"slug": "liga-1",
						"category": {
							"name": "Indonesia",
							"slug": "indonesia",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 368,
							"country": {
								"alpha2": "ID",
								"alpha3": "IDN",
								"name": "Indonesia"
							},
							"flag": "indonesia",
							"alpha2": "ID"
						},
						"userCount": 33071,
						"id": 1015,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 4113
				},
				"season": {
					"name": "Liga 1 24/25",
					"year": "24/25",
					"editor": false,
					"id": 65049
				},
				"roundInfo": {
					"round": 7
				},
				"customId": "pZtswOAb",
				"status": {
					"code": 0,
					"description": "Not started",
					"type": "notstarted"
				},
				"homeTeam": {
					"name": "PSIS Semarang",
					"slug": "psis-semarang",
					"shortName": "PSIS",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 8187,
					"nameCode": "SEM",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 189471,
					"country": {
						"alpha2": "ID",
						"alpha3": "IDN",
						"name": "Indonesia"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "سيمارانغ",
							"ru": "ПСИС Семаранг"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Arema FC",
					"slug": "arema-fc",
					"shortName": "Arema",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 11433,
					"nameCode": "ARE",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 47465,
					"country": {
						"alpha2": "ID",
						"alpha3": "IDN",
						"name": "Indonesia"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "ФК Арема"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {},
				"awayScore": {},
				"time": {},
				"changes": {
					"changeTimestamp": 0
				},
				"hasGlobalHighlights": false,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12650976,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727339400,
				"slug": "psis-semarang-arema-fc",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Liga 1",
					"slug": "liga-1",
					"category": {
						"name": "Indonesia",
						"slug": "indonesia",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 368,
						"country": {
							"alpha2": "ID",
							"alpha3": "IDN",
							"name": "Indonesia"
						},
						"flag": "indonesia",
						"alpha2": "ID"
					},
					"uniqueTournament": {
						"name": "Liga 1",
						"slug": "liga-1",
						"category": {
							"name": "Indonesia",
							"slug": "indonesia",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 368,
							"country": {
								"alpha2": "ID",
								"alpha3": "IDN",
								"name": "Indonesia"
							},
							"flag": "indonesia",
							"alpha2": "ID"
						},
						"userCount": 33071,
						"id": 1015,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 4113
				},
				"season": {
					"name": "Liga 1 24/25",
					"year": "24/25",
					"editor": false,
					"id": 65049
				},
				"roundInfo": {
					"round": 7
				},
				"customId": "IUGbstOWd",
				"status": {
					"code": 0,
					"description": "Not started",
					"type": "notstarted"
				},
				"homeTeam": {
					"name": "PSS Sleman",
					"slug": "pss-sleman",
					"shortName": "PSS ",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 7176,
					"nameCode": "SLE",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 204733,
					"country": {
						"alpha2": "ID",
						"alpha3": "IDN",
						"name": "Indonesia"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "سليمان"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Malut United FC",
					"slug": "malut-united",
					"shortName": "Malut Utd",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 1646,
					"nameCode": "MUN",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 491968,
					"country": {
						"alpha2": "ID",
						"alpha3": "IDN",
						"name": "Indonesia"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					}
				},
				"homeScore": {},
				"awayScore": {},
				"time": {},
				"changes": {
					"changeTimestamp": 0
				},
				"hasGlobalHighlights": false,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12650981,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727352000,
				"slug": "malut-united-fc-pss-sleman",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Pro League",
					"slug": "persian-gulf-pro-league",
					"category": {
						"name": "Iran",
						"slug": "iran",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 301,
						"country": {
							"alpha2": "IR",
							"alpha3": "IRN",
							"name": "Iran"
						},
						"flag": "iran",
						"alpha2": "IR"
					},
					"uniqueTournament": {
						"name": "Persian Gulf Pro League",
						"slug": "persian-gulf-pro-league",
						"category": {
							"name": "Iran",
							"slug": "iran",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 301,
							"country": {
								"alpha2": "IR",
								"alpha3": "IRN",
								"name": "Iran"
							},
							"flag": "iran",
							"alpha2": "IR"
						},
						"userCount": 17739,
						"id": 915,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 3625
				},
				"season": {
					"name": "Pro League 24/25",
					"year": "24/25",
					"editor": false,
					"seasonCoverageInfo": {
						"editorCoverageLevel": 3
					},
					"id": 65237
				},
				"roundInfo": {
					"round": 6
				},
				"customId": "oLnsqLn",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "Esteghlal FC",
					"slug": "esteghlal-fc",
					"shortName": "Esteghlal FC",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 45704,
					"nameCode": "EST",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 34316,
					"country": {
						"alpha2": "IR",
						"alpha3": "IRN",
						"name": "Iran"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "استقلال",
							"ru": "Эстегляль"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Persepolis FC",
					"slug": "persepolis-fc",
					"shortName": "Persepolis",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 68293,
					"nameCode": "PFC",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 34314,
					"country": {
						"alpha2": "IR",
						"alpha3": "IRN",
						"name": "Iran"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "برسبوليس",
							"ru": "ФК Персеполис"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"awayScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"time": {
					"currentPeriodStartTimestamp": 1727282614
				},
				"changes": {
					"changes": [
						"cardsCode"
					],
					"changeTimestamp": 1727286478
				},
				"hasGlobalHighlights": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12755466,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727278200,
				"slug": "esteghlal-fc-persepolis-fc",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Serie C, Girone A",
					"slug": "serie-c-girone-a",
					"category": {
						"name": "Italy",
						"slug": "italy",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 31,
						"country": {
							"alpha2": "IT",
							"alpha3": "ITA",
							"name": "Italy"
						},
						"flag": "italy",
						"alpha2": "IT"
					},
					"uniqueTournament": {
						"name": "Serie C, Girone A",
						"slug": "serie-c-girone-a",
						"category": {
							"name": "Italy",
							"slug": "italy",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 31,
							"country": {
								"alpha2": "IT",
								"alpha3": "ITA",
								"name": "Italy"
							},
							"flag": "italy",
							"alpha2": "IT"
						},
						"userCount": 7856,
						"id": 11445,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 37884
				},
				"season": {
					"name": "Serie C, Group A 24/25",
					"year": "24/25",
					"editor": false,
					"seasonCoverageInfo": {
						"editorCoverageLevel": 2
					},
					"id": 63975
				},
				"roundInfo": {
					"round": 6
				},
				"customId": "HebsWeb",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 3,
				"homeTeam": {
					"name": "AlbinoLeffe",
					"slug": "albinoleffe",
					"shortName": "AlbinoLeffe",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 2744,
					"nameCode": "ALB",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 2732,
					"country": {
						"alpha2": "IT",
						"alpha3": "ITA",
						"name": "Italy"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Альбинолеффе"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Aurora Pro Patria",
					"slug": "aurora-pro-patria",
					"shortName": "Aurora Pro Patria",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 2204,
					"nameCode": "APP",
					"national": false,
					"type": 0,
					"id": 2746,
					"country": {
						"alpha2": "IT",
						"alpha3": "ITA",
						"name": "Italy"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Аурора Про Патрия 1919"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"injuryTime1": 3,
					"injuryTime2": 6,
					"currentPeriodStartTimestamp": 1727202360
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727202364
				},
				"hasGlobalHighlights": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12545958,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727195400,
				"slug": "aurora-pro-patria-albinoleffe",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Serie C, Girone A",
					"slug": "serie-c-girone-a",
					"category": {
						"name": "Italy",
						"slug": "italy",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 31,
						"country": {
							"alpha2": "IT",
							"alpha3": "ITA",
							"name": "Italy"
						},
						"flag": "italy",
						"alpha2": "IT"
					},
					"uniqueTournament": {
						"name": "Serie C, Girone A",
						"slug": "serie-c-girone-a",
						"category": {
							"name": "Italy",
							"slug": "italy",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 31,
							"country": {
								"alpha2": "IT",
								"alpha3": "ITA",
								"name": "Italy"
							},
							"flag": "italy",
							"alpha2": "IT"
						},
						"userCount": 7856,
						"id": 11445,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 37884
				},
				"season": {
					"name": "Serie C, Group A 24/25",
					"year": "24/25",
					"editor": false,
					"seasonCoverageInfo": {
						"editorCoverageLevel": 2
					},
					"id": 63975
				},
				"roundInfo": {
					"round": 6
				},
				"customId": "xebsLGo",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "L.R. Vicenza",
					"slug": "lr-vicenza",
					"shortName": "Vicenza",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 11361,
					"nameCode": "VIC",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 2722,
					"country": {
						"alpha2": "IT",
						"alpha3": "ITA",
						"name": "Italy"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "إل آر. فيتشنزا",
							"ru": "Виченца"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Renate",
					"slug": "renate",
					"shortName": "Renate",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 4193,
					"nameCode": "ACR",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 36586,
					"country": {
						"alpha2": "IT",
						"alpha3": "ITA",
						"name": "Italy"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Ренате"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"injuryTime2": 5,
					"currentPeriodStartTimestamp": 1727210178
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727210182
				},
				"hasGlobalHighlights": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12545951,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727203500,
				"slug": "renate-lr-vicenza",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Serie C, Girone A",
					"slug": "serie-c-girone-a",
					"category": {
						"name": "Italy",
						"slug": "italy",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 31,
						"country": {
							"alpha2": "IT",
							"alpha3": "ITA",
							"name": "Italy"
						},
						"flag": "italy",
						"alpha2": "IT"
					},
					"uniqueTournament": {
						"name": "Serie C, Girone A",
						"slug": "serie-c-girone-a",
						"category": {
							"name": "Italy",
							"slug": "italy",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 31,
							"country": {
								"alpha2": "IT",
								"alpha3": "ITA",
								"name": "Italy"
							},
							"flag": "italy",
							"alpha2": "IT"
						},
						"userCount": 7856,
						"id": 11445,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 37884
				},
				"season": {
					"name": "Serie C, Group A 24/25",
					"year": "24/25",
					"editor": false,
					"seasonCoverageInfo": {
						"editorCoverageLevel": 2
					},
					"id": 63975
				},
				"roundInfo": {
					"round": 6
				},
				"customId": "rfbsufb",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "Novara",
					"slug": "novara",
					"shortName": "Novara",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 4563,
					"nameCode": "NOV",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 2767,
					"country": {
						"alpha2": "IT",
						"alpha3": "ITA",
						"name": "Italy"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "نوفارا كالسيو",
							"ru": "Новара"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Pro Vercelli",
					"slug": "pro-vercelli",
					"shortName": "Pro Vercelli",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 4250,
					"nameCode": "PVC",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 2769,
					"country": {
						"alpha2": "IT",
						"alpha3": "ITA",
						"name": "Italy"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Про Верчелли"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"injuryTime1": 2,
					"injuryTime2": 5,
					"currentPeriodStartTimestamp": 1727210435
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727210437
				},
				"hasGlobalHighlights": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12545950,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727203500,
				"slug": "pro-vercelli-novara",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Serie C, Girone A",
					"slug": "serie-c-girone-a",
					"category": {
						"name": "Italy",
						"slug": "italy",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 31,
						"country": {
							"alpha2": "IT",
							"alpha3": "ITA",
							"name": "Italy"
						},
						"flag": "italy",
						"alpha2": "IT"
					},
					"uniqueTournament": {
						"name": "Serie C, Girone A",
						"slug": "serie-c-girone-a",
						"category": {
							"name": "Italy",
							"slug": "italy",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 31,
							"country": {
								"alpha2": "IT",
								"alpha3": "ITA",
								"name": "Italy"
							},
							"flag": "italy",
							"alpha2": "IT"
						},
						"userCount": 7856,
						"id": 11445,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 37884
				},
				"season": {
					"name": "Serie C, Group A 24/25",
					"year": "24/25",
					"editor": false,
					"seasonCoverageInfo": {
						"editorCoverageLevel": 2
					},
					"id": 63975
				},
				"roundInfo": {
					"round": 6
				},
				"customId": "QebslAV",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "Padova",
					"slug": "padova",
					"shortName": "Padova",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 11458,
					"nameCode": "PAD",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 2741,
					"country": {
						"alpha2": "IT",
						"alpha3": "ITA",
						"name": "Italy"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Падова"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Virtus Verona",
					"slug": "virtus-verona",
					"shortName": "Virtus Verona",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 3304,
					"nameCode": "VVV",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 113761,
					"country": {
						"alpha2": "IT",
						"alpha3": "ITA",
						"name": "Italy"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "فيرتوس فيرونا",
							"ru": "Виртус Верона"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 4,
					"display": 4,
					"period1": 0,
					"period2": 4,
					"normaltime": 4
				},
				"awayScore": {
					"current": 1,
					"display": 1,
					"period1": 1,
					"period2": 0,
					"normaltime": 1
				},
				"time": {
					"injuryTime1": 1,
					"injuryTime2": 6,
					"currentPeriodStartTimestamp": 1727210520
				},
				"changes": {
					"changes": [
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime"
					],
					"changeTimestamp": 1727210625
				},
				"hasGlobalHighlights": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12545949,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727203500,
				"slug": "virtus-verona-padova",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Serie C, Girone A",
					"slug": "serie-c-girone-a",
					"category": {
						"name": "Italy",
						"slug": "italy",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 31,
						"country": {
							"alpha2": "IT",
							"alpha3": "ITA",
							"name": "Italy"
						},
						"flag": "italy",
						"alpha2": "IT"
					},
					"uniqueTournament": {
						"name": "Serie C, Girone A",
						"slug": "serie-c-girone-a",
						"category": {
							"name": "Italy",
							"slug": "italy",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 31,
							"country": {
								"alpha2": "IT",
								"alpha3": "ITA",
								"name": "Italy"
							},
							"flag": "italy",
							"alpha2": "IT"
						},
						"userCount": 7856,
						"id": 11445,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 37884
				},
				"season": {
					"name": "Serie C, Group A 24/25",
					"year": "24/25",
					"editor": false,
					"seasonCoverageInfo": {
						"editorCoverageLevel": 2
					},
					"id": 63975
				},
				"roundInfo": {
					"round": 6
				},
				"customId": "hAVsygUd",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "Atalanta U23",
					"slug": "atalanta-u23",
					"shortName": "Atalanta U23",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 3607,
					"nameCode": "ATA",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 485323,
					"country": {
						"alpha2": "IT",
						"alpha3": "ITA",
						"name": "Italy"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "Atalanta BC U23",
							"ru": "Atalanta BC U23"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Pergolettese",
					"slug": "pergolettese",
					"shortName": "Pergolettese",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 2532,
					"nameCode": "PER",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 113757,
					"country": {
						"alpha2": "IT",
						"alpha3": "ITA",
						"name": "Italy"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Пергокрема 1932"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 5,
					"display": 5,
					"period1": 0,
					"period2": 5,
					"normaltime": 5
				},
				"awayScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"time": {
					"injuryTime2": 3,
					"currentPeriodStartTimestamp": 1727288365
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727288368
				},
				"hasGlobalHighlights": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12545956,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727281800,
				"slug": "atalanta-u23-pergolettese",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Serie C, Girone A",
					"slug": "serie-c-girone-a",
					"category": {
						"name": "Italy",
						"slug": "italy",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 31,
						"country": {
							"alpha2": "IT",
							"alpha3": "ITA",
							"name": "Italy"
						},
						"flag": "italy",
						"alpha2": "IT"
					},
					"uniqueTournament": {
						"name": "Serie C, Girone A",
						"slug": "serie-c-girone-a",
						"category": {
							"name": "Italy",
							"slug": "italy",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 31,
							"country": {
								"alpha2": "IT",
								"alpha3": "ITA",
								"name": "Italy"
							},
							"flag": "italy",
							"alpha2": "IT"
						},
						"userCount": 7856,
						"id": 11445,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 37884
				},
				"season": {
					"name": "Serie C, Group A 24/25",
					"year": "24/25",
					"editor": false,
					"seasonCoverageInfo": {
						"editorCoverageLevel": 2
					},
					"id": 63975
				},
				"roundInfo": {
					"round": 6
				},
				"customId": "MQFcsGdcd",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "Caldiero Terme",
					"slug": "caldiero-terme",
					"shortName": "Caldiero Terme",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 1031,
					"nameCode": "CAL",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 327087,
					"country": {
						"alpha2": "IT",
						"alpha3": "ITA",
						"name": "Italy"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "كالدييرو تيرمي",
							"ru": "Кальдьеро-Терме"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Alcione Milano",
					"slug": "alcione-milano",
					"shortName": "Alcione",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 1765,
					"nameCode": "ASD",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 380181,
					"country": {
						"alpha2": "IT",
						"alpha3": "ITA",
						"name": "Italy"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					}
				},
				"homeScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"awayScore": {
					"current": 2,
					"display": 2,
					"period1": 0,
					"period2": 2,
					"normaltime": 2
				},
				"time": {
					"injuryTime1": 3,
					"injuryTime2": 5,
					"currentPeriodStartTimestamp": 1727288620
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727288624
				},
				"hasGlobalHighlights": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12545953,
				"homeRedCards": 1,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727281800,
				"slug": "alcione-milano-caldiero-terme",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Serie C, Girone A",
					"slug": "serie-c-girone-a",
					"category": {
						"name": "Italy",
						"slug": "italy",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 31,
						"country": {
							"alpha2": "IT",
							"alpha3": "ITA",
							"name": "Italy"
						},
						"flag": "italy",
						"alpha2": "IT"
					},
					"uniqueTournament": {
						"name": "Serie C, Girone A",
						"slug": "serie-c-girone-a",
						"category": {
							"name": "Italy",
							"slug": "italy",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 31,
							"country": {
								"alpha2": "IT",
								"alpha3": "ITA",
								"name": "Italy"
							},
							"flag": "italy",
							"alpha2": "IT"
						},
						"userCount": 7856,
						"id": 11445,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 37884
				},
				"season": {
					"name": "Serie C, Group A 24/25",
					"year": "24/25",
					"editor": false,
					"seasonCoverageInfo": {
						"editorCoverageLevel": 2
					},
					"id": 63975
				},
				"roundInfo": {
					"round": 6
				},
				"customId": "IidsJmtb",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "Lecco",
					"slug": "lecco",
					"shortName": "Lecco",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 7414,
					"nameCode": "LEC",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 7933,
					"country": {
						"alpha2": "IT",
						"alpha3": "ITA",
						"name": "Italy"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Леччо 1912"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Arzignano Valchiampo",
					"slug": "arzignano-valchiampo",
					"shortName": "Arzignano",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 2187,
					"nameCode": "ARZ",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 170634,
					"country": {
						"alpha2": "IT",
						"alpha3": "ITA",
						"name": "Italy"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "ФК Арциньяно Валькиампо"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 3,
					"display": 3,
					"period1": 0,
					"period2": 3,
					"normaltime": 3
				},
				"awayScore": {
					"current": 2,
					"display": 2,
					"period1": 2,
					"period2": 0,
					"normaltime": 2
				},
				"time": {
					"injuryTime1": 3,
					"injuryTime2": 7,
					"currentPeriodStartTimestamp": 1727288672
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727288674
				},
				"hasGlobalHighlights": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12545948,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727281800,
				"slug": "arzignano-valchiampo-lecco",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Serie C, Girone A",
					"slug": "serie-c-girone-a",
					"category": {
						"name": "Italy",
						"slug": "italy",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 31,
						"country": {
							"alpha2": "IT",
							"alpha3": "ITA",
							"name": "Italy"
						},
						"flag": "italy",
						"alpha2": "IT"
					},
					"uniqueTournament": {
						"name": "Serie C, Girone A",
						"slug": "serie-c-girone-a",
						"category": {
							"name": "Italy",
							"slug": "italy",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 31,
							"country": {
								"alpha2": "IT",
								"alpha3": "ITA",
								"name": "Italy"
							},
							"flag": "italy",
							"alpha2": "IT"
						},
						"userCount": 7856,
						"id": 11445,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 37884
				},
				"season": {
					"name": "Serie C, Group A 24/25",
					"year": "24/25",
					"editor": false,
					"seasonCoverageInfo": {
						"editorCoverageLevel": 2
					},
					"id": 63975
				},
				"roundInfo": {
					"round": 6
				},
				"customId": "yTosHUW",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "Feralpisalò",
					"slug": "feralpisalo",
					"shortName": "Feralpisalò",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 6141,
					"nameCode": "FER",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 37173,
					"country": {
						"alpha2": "IT",
						"alpha3": "ITA",
						"name": "Italy"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Фералписало"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Giana Erminio",
					"slug": "giana-erminio",
					"shortName": "Giana",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 2850,
					"nameCode": "GIE",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 117232,
					"country": {
						"alpha2": "IT",
						"alpha3": "ITA",
						"name": "Italy"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Джана Эрминьо"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 2,
					"display": 2,
					"period1": 0,
					"period2": 2,
					"normaltime": 2
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"injuryTime1": 2,
					"injuryTime2": 4,
					"currentPeriodStartTimestamp": 1727295732
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727295736
				},
				"hasGlobalHighlights": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12545954,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727289000,
				"slug": "giana-erminio-feralpisalo",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Serie C, Girone B",
					"slug": "serie-c-girone-b",
					"category": {
						"name": "Italy",
						"slug": "italy",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 31,
						"country": {
							"alpha2": "IT",
							"alpha3": "ITA",
							"name": "Italy"
						},
						"flag": "italy",
						"alpha2": "IT"
					},
					"uniqueTournament": {
						"name": "Serie C, Girone B",
						"slug": "serie-c-girone-b",
						"category": {
							"name": "Italy",
							"slug": "italy",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 31,
							"country": {
								"alpha2": "IT",
								"alpha3": "ITA",
								"name": "Italy"
							},
							"flag": "italy",
							"alpha2": "IT"
						},
						"userCount": 7278,
						"id": 11447,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 37885
				},
				"season": {
					"name": "Serie C, Group B 24/25",
					"year": "24/25",
					"editor": false,
					"seasonCoverageInfo": {
						"editorCoverageLevel": 2
					},
					"id": 63976
				},
				"roundInfo": {
					"round": 6
				},
				"customId": "GebsHfb",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "Arezzo",
					"slug": "arezzo",
					"shortName": "Arezzo",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 3589,
					"nameCode": "ARE",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 2731,
					"country": {
						"alpha2": "IT",
						"alpha3": "ITA",
						"name": "Italy"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Ареццо"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Gubbio",
					"slug": "gubbio",
					"shortName": "Gubbio",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 4060,
					"nameCode": "GUB",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 2782,
					"country": {
						"alpha2": "IT",
						"alpha3": "ITA",
						"name": "Italy"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "ФК Губбио 1910"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 2,
					"display": 2,
					"period1": 1,
					"period2": 1,
					"normaltime": 2
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"injuryTime1": 1,
					"injuryTime2": 4,
					"currentPeriodStartTimestamp": 1727210161
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727210164
				},
				"hasGlobalHighlights": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12545604,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727203500,
				"slug": "gubbio-arezzo",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Serie C, Girone B",
					"slug": "serie-c-girone-b",
					"category": {
						"name": "Italy",
						"slug": "italy",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 31,
						"country": {
							"alpha2": "IT",
							"alpha3": "ITA",
							"name": "Italy"
						},
						"flag": "italy",
						"alpha2": "IT"
					},
					"uniqueTournament": {
						"name": "Serie C, Girone B",
						"slug": "serie-c-girone-b",
						"category": {
							"name": "Italy",
							"slug": "italy",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 31,
							"country": {
								"alpha2": "IT",
								"alpha3": "ITA",
								"name": "Italy"
							},
							"flag": "italy",
							"alpha2": "IT"
						},
						"userCount": 7278,
						"id": 11447,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 37885
				},
				"season": {
					"name": "Serie C, Group B 24/25",
					"year": "24/25",
					"editor": false,
					"seasonCoverageInfo": {
						"editorCoverageLevel": 2
					},
					"id": 63976
				},
				"roundInfo": {
					"round": 6
				},
				"customId": "dfbsaVW",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "Sestri Levante",
					"slug": "sestri-levante",
					"shortName": "Sestri Levante",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 2446,
					"nameCode": "USD",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 117250,
					"country": {
						"alpha2": "IT",
						"alpha3": "ITA",
						"name": "Italy"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					}
				},
				"awayTeam": {
					"name": "Torres",
					"slug": "torres",
					"shortName": "Torres",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 5653,
					"nameCode": "TOR",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 2753,
					"country": {
						"alpha2": "IT",
						"alpha3": "ITA",
						"name": "Italy"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					}
				},
				"homeScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"awayScore": {
					"current": 2,
					"display": 2,
					"period1": 1,
					"period2": 1,
					"normaltime": 2
				},
				"time": {
					"injuryTime2": 4,
					"currentPeriodStartTimestamp": 1727210173
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727210176
				},
				"hasGlobalHighlights": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12545600,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727203500,
				"slug": "sestri-levante-torres",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Serie C, Girone B",
					"slug": "serie-c-girone-b",
					"category": {
						"name": "Italy",
						"slug": "italy",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 31,
						"country": {
							"alpha2": "IT",
							"alpha3": "ITA",
							"name": "Italy"
						},
						"flag": "italy",
						"alpha2": "IT"
					},
					"uniqueTournament": {
						"name": "Serie C, Girone B",
						"slug": "serie-c-girone-b",
						"category": {
							"name": "Italy",
							"slug": "italy",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 31,
							"country": {
								"alpha2": "IT",
								"alpha3": "ITA",
								"name": "Italy"
							},
							"flag": "italy",
							"alpha2": "IT"
						},
						"userCount": 7278,
						"id": 11447,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 37885
				},
				"season": {
					"name": "Serie C, Group B 24/25",
					"year": "24/25",
					"editor": false,
					"seasonCoverageInfo": {
						"editorCoverageLevel": 2
					},
					"id": 63976
				},
				"roundInfo": {
					"round": 6
				},
				"customId": "LebsgXW",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 3,
				"homeTeam": {
					"name": "Lucchese",
					"slug": "lucchese",
					"shortName": "Lucchese",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 3267,
					"nameCode": "LUC",
					"national": false,
					"type": 0,
					"id": 2736,
					"country": {
						"alpha2": "IT",
						"alpha3": "ITA",
						"name": "Italy"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "ФК Луккезе Либертас 1905"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Pianese",
					"slug": "pianese",
					"shortName": "Pianese",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 1509,
					"nameCode": "PIA",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 117356,
					"country": {
						"alpha2": "IT",
						"alpha3": "ITA",
						"name": "Italy"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Пьянезе"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 3,
					"display": 3,
					"period1": 0,
					"period2": 3,
					"normaltime": 3
				},
				"awayScore": {
					"current": 3,
					"display": 3,
					"period1": 1,
					"period2": 2,
					"normaltime": 3
				},
				"time": {
					"injuryTime1": 1,
					"injuryTime2": 6,
					"currentPeriodStartTimestamp": 1727288700
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727288706
				},
				"hasGlobalHighlights": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12545601,
				"awayRedCards": 1,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727281800,
				"slug": "pianese-lucchese",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Serie C, Girone B",
					"slug": "serie-c-girone-b",
					"category": {
						"name": "Italy",
						"slug": "italy",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 31,
						"country": {
							"alpha2": "IT",
							"alpha3": "ITA",
							"name": "Italy"
						},
						"flag": "italy",
						"alpha2": "IT"
					},
					"uniqueTournament": {
						"name": "Serie C, Girone B",
						"slug": "serie-c-girone-b",
						"category": {
							"name": "Italy",
							"slug": "italy",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 31,
							"country": {
								"alpha2": "IT",
								"alpha3": "ITA",
								"name": "Italy"
							},
							"flag": "italy",
							"alpha2": "IT"
						},
						"userCount": 7278,
						"id": 11447,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 37885
				},
				"season": {
					"name": "Serie C, Group B 24/25",
					"year": "24/25",
					"editor": false,
					"seasonCoverageInfo": {
						"editorCoverageLevel": 2
					},
					"id": 63976
				},
				"roundInfo": {
					"round": 6
				},
				"customId": "iebsmVW",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "Ternana",
					"slug": "ternana",
					"shortName": "Ternana",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 9509,
					"nameCode": "TER",
					"national": false,
					"type": 0,
					"id": 2708,
					"country": {
						"alpha2": "IT",
						"alpha3": "ITA",
						"name": "Italy"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Тернана Кальчо"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Legnago Salus",
					"slug": "legnago-salus",
					"shortName": "Legnago",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 2105,
					"nameCode": "LEG",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 117262,
					"country": {
						"alpha2": "IT",
						"alpha3": "ITA",
						"name": "Italy"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "ليجناجو سالوس",
							"ru": "Леньяно Салюс"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 8,
					"display": 8,
					"period1": 3,
					"period2": 5,
					"normaltime": 8
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"injuryTime1": 2,
					"currentPeriodStartTimestamp": 1727288522
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727288524
				},
				"hasGlobalHighlights": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12545597,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727281800,
				"slug": "legnago-salus-ternana",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Serie C, Girone C",
					"slug": "serie-c-girone-c",
					"category": {
						"name": "Italy",
						"slug": "italy",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 31,
						"country": {
							"alpha2": "IT",
							"alpha3": "ITA",
							"name": "Italy"
						},
						"flag": "italy",
						"alpha2": "IT"
					},
					"uniqueTournament": {
						"name": "Serie C, Girone C",
						"slug": "serie-c-girone-c",
						"category": {
							"name": "Italy",
							"slug": "italy",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 31,
							"country": {
								"alpha2": "IT",
								"alpha3": "ITA",
								"name": "Italy"
							},
							"flag": "italy",
							"alpha2": "IT"
						},
						"userCount": 8901,
						"id": 11446,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 37886
				},
				"season": {
					"name": "Serie C, Group C 24/25",
					"year": "24/25",
					"editor": false,
					"seasonCoverageInfo": {
						"editorCoverageLevel": 2
					},
					"id": 63973
				},
				"roundInfo": {
					"round": 6
				},
				"customId": "IebshCw",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "Casertana",
					"slug": "casertana",
					"shortName": "Casertana",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 4334,
					"nameCode": "CFC",
					"national": false,
					"type": 0,
					"id": 53857,
					"country": {
						"alpha2": "IT",
						"alpha3": "ITA",
						"name": "Italy"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Казертана"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Taranto",
					"slug": "taranto",
					"shortName": "Taranto",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 6124,
					"nameCode": "TAR",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 2733,
					"country": {
						"alpha2": "IT",
						"alpha3": "ITA",
						"name": "Italy"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					}
				},
				"homeScore": {
					"current": 2,
					"display": 2,
					"period1": 0,
					"period2": 2,
					"normaltime": 2
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"injuryTime1": 2,
					"injuryTime2": 5,
					"currentPeriodStartTimestamp": 1727210360
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727210362
				},
				"hasGlobalHighlights": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12545258,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727203500,
				"slug": "casertana-taranto",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Serie C, Girone C",
					"slug": "serie-c-girone-c",
					"category": {
						"name": "Italy",
						"slug": "italy",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 31,
						"country": {
							"alpha2": "IT",
							"alpha3": "ITA",
							"name": "Italy"
						},
						"flag": "italy",
						"alpha2": "IT"
					},
					"uniqueTournament": {
						"name": "Serie C, Girone C",
						"slug": "serie-c-girone-c",
						"category": {
							"name": "Italy",
							"slug": "italy",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 31,
							"country": {
								"alpha2": "IT",
								"alpha3": "ITA",
								"name": "Italy"
							},
							"flag": "italy",
							"alpha2": "IT"
						},
						"userCount": 8901,
						"id": 11446,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 37886
				},
				"season": {
					"name": "Serie C, Group C 24/25",
					"year": "24/25",
					"editor": false,
					"seasonCoverageInfo": {
						"editorCoverageLevel": 2
					},
					"id": 63973
				},
				"roundInfo": {
					"round": 6
				},
				"customId": "lCcsvrfc",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 3,
				"homeTeam": {
					"name": "Team Altamura",
					"slug": "team-altamura",
					"shortName": "Team Altamura",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 1827,
					"nameCode": "ASD",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 263370,
					"country": {
						"alpha2": "IT",
						"alpha3": "ITA",
						"name": "Italy"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "فريق ألتامورا",
							"ru": "Тим Альтамура"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Cavese",
					"slug": "cavese",
					"shortName": "Cavese",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 2444,
					"nameCode": "CAV",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 6361,
					"country": {
						"alpha2": "IT",
						"alpha3": "ITA",
						"name": "Italy"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Кавезе"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"injuryTime1": 1,
					"injuryTime2": 7,
					"currentPeriodStartTimestamp": 1727210284
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727210287
				},
				"hasGlobalHighlights": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12545247,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727203500,
				"slug": "team-altamura-cavese",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Serie C, Girone C",
					"slug": "serie-c-girone-c",
					"category": {
						"name": "Italy",
						"slug": "italy",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 31,
						"country": {
							"alpha2": "IT",
							"alpha3": "ITA",
							"name": "Italy"
						},
						"flag": "italy",
						"alpha2": "IT"
					},
					"uniqueTournament": {
						"name": "Serie C, Girone C",
						"slug": "serie-c-girone-c",
						"category": {
							"name": "Italy",
							"slug": "italy",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 31,
							"country": {
								"alpha2": "IT",
								"alpha3": "ITA",
								"name": "Italy"
							},
							"flag": "italy",
							"alpha2": "IT"
						},
						"userCount": 8901,
						"id": 11446,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 37886
				},
				"season": {
					"name": "Serie C, Group C 24/25",
					"year": "24/25",
					"editor": false,
					"seasonCoverageInfo": {
						"editorCoverageLevel": 2
					},
					"id": 63973
				},
				"roundInfo": {
					"round": 6
				},
				"customId": "FebsdAU",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 3,
				"homeTeam": {
					"name": "Turris",
					"slug": "turris",
					"shortName": "Turris",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 3348,
					"nameCode": "TUR",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 111253,
					"country": {
						"alpha2": "IT",
						"alpha3": "ITA",
						"name": "Italy"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					}
				},
				"awayTeam": {
					"name": "Avellino",
					"slug": "avellino",
					"shortName": "Avellino",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 8703,
					"nameCode": "USA",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 2730,
					"country": {
						"alpha2": "IT",
						"alpha3": "ITA",
						"name": "Italy"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Авеллино 1912"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"injuryTime2": 3,
					"currentPeriodStartTimestamp": 1727210188
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727210192
				},
				"hasGlobalHighlights": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12545252,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727203500,
				"slug": "turris-avellino",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Serie C, Girone C",
					"slug": "serie-c-girone-c",
					"category": {
						"name": "Italy",
						"slug": "italy",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 31,
						"country": {
							"alpha2": "IT",
							"alpha3": "ITA",
							"name": "Italy"
						},
						"flag": "italy",
						"alpha2": "IT"
					},
					"uniqueTournament": {
						"name": "Serie C, Girone C",
						"slug": "serie-c-girone-c",
						"category": {
							"name": "Italy",
							"slug": "italy",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 31,
							"country": {
								"alpha2": "IT",
								"alpha3": "ITA",
								"name": "Italy"
							},
							"flag": "italy",
							"alpha2": "IT"
						},
						"userCount": 8901,
						"id": 11446,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 37886
				},
				"season": {
					"name": "Serie C, Group C 24/25",
					"year": "24/25",
					"editor": false,
					"seasonCoverageInfo": {
						"editorCoverageLevel": 2
					},
					"id": 63973
				},
				"roundInfo": {
					"round": 6
				},
				"customId": "LidsLyr",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "Potenza",
					"slug": "potenza",
					"shortName": "Potenza",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 4218,
					"nameCode": "POT",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 7936,
					"country": {
						"alpha2": "IT",
						"alpha3": "ITA",
						"name": "Italy"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Потенца"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Trapani",
					"slug": "trapani",
					"shortName": "Trapani",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 5294,
					"nameCode": "TRA",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 43686,
					"country": {
						"alpha2": "IT",
						"alpha3": "ITA",
						"name": "Italy"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Трапани"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 1,
					"display": 1,
					"period1": 1,
					"period2": 0,
					"normaltime": 1
				},
				"awayScore": {
					"current": 5,
					"display": 5,
					"period1": 2,
					"period2": 3,
					"normaltime": 5
				},
				"time": {
					"injuryTime1": 1,
					"injuryTime2": 5,
					"currentPeriodStartTimestamp": 1727288472
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727288478
				},
				"hasGlobalHighlights": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12545253,
				"homeRedCards": 1,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727281800,
				"slug": "trapani-potenza",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Serie C, Girone C",
					"slug": "serie-c-girone-c",
					"category": {
						"name": "Italy",
						"slug": "italy",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 31,
						"country": {
							"alpha2": "IT",
							"alpha3": "ITA",
							"name": "Italy"
						},
						"flag": "italy",
						"alpha2": "IT"
					},
					"uniqueTournament": {
						"name": "Serie C, Girone C",
						"slug": "serie-c-girone-c",
						"category": {
							"name": "Italy",
							"slug": "italy",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 31,
							"country": {
								"alpha2": "IT",
								"alpha3": "ITA",
								"name": "Italy"
							},
							"flag": "italy",
							"alpha2": "IT"
						},
						"userCount": 8901,
						"id": 11446,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 37886
				},
				"season": {
					"name": "Serie C, Group C 24/25",
					"year": "24/25",
					"editor": false,
					"seasonCoverageInfo": {
						"editorCoverageLevel": 2
					},
					"id": 63973
				},
				"roundInfo": {
					"round": 6
				},
				"customId": "AebsXrfc",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 3,
				"homeTeam": {
					"name": "Catania",
					"slug": "catania",
					"shortName": "Catania",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 11711,
					"nameCode": "CAT",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 2725,
					"country": {
						"alpha2": "IT",
						"alpha3": "ITA",
						"name": "Italy"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "كالسيو كاتانيا",
							"ru": "Катания"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Audace Cerignola",
					"slug": "audace-cerignola",
					"shortName": "Cerignola",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 3857,
					"nameCode": "CER",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 263397,
					"country": {
						"alpha2": "IT",
						"alpha3": "ITA",
						"name": "Italy"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "أوداس سيرينولا",
							"ru": "Аудаче Чериньола"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"injuryTime1": 3,
					"injuryTime2": 4,
					"currentPeriodStartTimestamp": 1727296844
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727296845
				},
				"hasGlobalHighlights": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12545264,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727289900,
				"slug": "audace-cerignola-catania",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Serie C, Girone C",
					"slug": "serie-c-girone-c",
					"category": {
						"name": "Italy",
						"slug": "italy",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 31,
						"country": {
							"alpha2": "IT",
							"alpha3": "ITA",
							"name": "Italy"
						},
						"flag": "italy",
						"alpha2": "IT"
					},
					"uniqueTournament": {
						"name": "Serie C, Girone C",
						"slug": "serie-c-girone-c",
						"category": {
							"name": "Italy",
							"slug": "italy",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 31,
							"country": {
								"alpha2": "IT",
								"alpha3": "ITA",
								"name": "Italy"
							},
							"flag": "italy",
							"alpha2": "IT"
						},
						"userCount": 8901,
						"id": 11446,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 37886
				},
				"season": {
					"name": "Serie C, Group C 24/25",
					"year": "24/25",
					"editor": false,
					"seasonCoverageInfo": {
						"editorCoverageLevel": 2
					},
					"id": 63973
				},
				"roundInfo": {
					"round": 6
				},
				"customId": "tebsMid",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "Crotone",
					"slug": "crotone",
					"shortName": "Crotone",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 11447,
					"nameCode": "COR",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 2718,
					"country": {
						"alpha2": "IT",
						"alpha3": "ITA",
						"name": "Italy"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "كروتوني",
							"ru": "Кротоне"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Sorrento",
					"slug": "sorrento",
					"shortName": "Sorrento",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 2321,
					"nameCode": "SOR",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 7937,
					"country": {
						"alpha2": "IT",
						"alpha3": "ITA",
						"name": "Italy"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Сорренто 1945"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 1,
					"display": 1,
					"period1": 1,
					"period2": 0,
					"normaltime": 1
				},
				"awayScore": {
					"current": 2,
					"display": 2,
					"period1": 0,
					"period2": 2,
					"normaltime": 2
				},
				"time": {
					"injuryTime2": 5,
					"currentPeriodStartTimestamp": 1727296728
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727296738
				},
				"hasGlobalHighlights": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12545267,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727289900,
				"slug": "sorrento-crotone",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Serie C, Girone C",
					"slug": "serie-c-girone-c",
					"category": {
						"name": "Italy",
						"slug": "italy",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 31,
						"country": {
							"alpha2": "IT",
							"alpha3": "ITA",
							"name": "Italy"
						},
						"flag": "italy",
						"alpha2": "IT"
					},
					"uniqueTournament": {
						"name": "Serie C, Girone C",
						"slug": "serie-c-girone-c",
						"category": {
							"name": "Italy",
							"slug": "italy",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 31,
							"country": {
								"alpha2": "IT",
								"alpha3": "ITA",
								"name": "Italy"
							},
							"flag": "italy",
							"alpha2": "IT"
						},
						"userCount": 8901,
						"id": 11446,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 37886
				},
				"season": {
					"name": "Serie C, Group C 24/25",
					"year": "24/25",
					"editor": false,
					"seasonCoverageInfo": {
						"editorCoverageLevel": 2
					},
					"id": 63973
				},
				"roundInfo": {
					"round": 6
				},
				"customId": "dgbsPGFc",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "Foggia",
					"slug": "foggia",
					"shortName": "Foggia",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 9772,
					"nameCode": "CAF",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 2803,
					"country": {
						"alpha2": "IT",
						"alpha3": "ITA",
						"name": "Italy"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Фоджа"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Giugliano",
					"slug": "giugliano",
					"shortName": "Giugliano",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 3304,
					"nameCode": "GIU",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 326590,
					"country": {
						"alpha2": "IT",
						"alpha3": "ITA",
						"name": "Italy"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "ФК Гиглиано"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 1,
					"display": 1,
					"period1": 1,
					"period2": 0,
					"normaltime": 1
				},
				"awayScore": {
					"current": 2,
					"display": 2,
					"period1": 2,
					"period2": 0,
					"normaltime": 2
				},
				"time": {
					"injuryTime1": 1,
					"injuryTime2": 5,
					"currentPeriodStartTimestamp": 1727296643
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727296645
				},
				"hasGlobalHighlights": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12545257,
				"homeRedCards": 1,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727289900,
				"slug": "giugliano-foggia",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Serie C, Girone C",
					"slug": "serie-c-girone-c",
					"category": {
						"name": "Italy",
						"slug": "italy",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 31,
						"country": {
							"alpha2": "IT",
							"alpha3": "ITA",
							"name": "Italy"
						},
						"flag": "italy",
						"alpha2": "IT"
					},
					"uniqueTournament": {
						"name": "Serie C, Girone C",
						"slug": "serie-c-girone-c",
						"category": {
							"name": "Italy",
							"slug": "italy",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 31,
							"country": {
								"alpha2": "IT",
								"alpha3": "ITA",
								"name": "Italy"
							},
							"flag": "italy",
							"alpha2": "IT"
						},
						"userCount": 8901,
						"id": 11446,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 37886
				},
				"season": {
					"name": "Serie C, Group C 24/25",
					"year": "24/25",
					"editor": false,
					"seasonCoverageInfo": {
						"editorCoverageLevel": 2
					},
					"id": 63973
				},
				"roundInfo": {
					"round": 6
				},
				"customId": "vebsuGr",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 3,
				"homeTeam": {
					"name": "Latina",
					"slug": "latina",
					"shortName": "Latina",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 2942,
					"nameCode": "LAT",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 44069,
					"country": {
						"alpha2": "IT",
						"alpha3": "ITA",
						"name": "Italy"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					}
				},
				"awayTeam": {
					"name": "Messina",
					"slug": "messina",
					"shortName": "Messina",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 3885,
					"nameCode": "MES",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 2720,
					"country": {
						"alpha2": "IT",
						"alpha3": "ITA",
						"name": "Italy"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "ACR Messina"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 1,
					"display": 1,
					"period1": 1,
					"period2": 0,
					"normaltime": 1
				},
				"awayScore": {
					"current": 1,
					"display": 1,
					"period1": 1,
					"period2": 0,
					"normaltime": 1
				},
				"time": {
					"injuryTime1": 2,
					"injuryTime2": 6,
					"currentPeriodStartTimestamp": 1727296753
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727296763
				},
				"hasGlobalHighlights": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12545250,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727289900,
				"slug": "latina-messina",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "J.League 2",
					"slug": "jleague-2",
					"category": {
						"name": "Japan",
						"slug": "japan",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 52,
						"country": {
							"alpha2": "JP",
							"alpha3": "JPN",
							"name": "Japan"
						},
						"flag": "japan",
						"alpha2": "JP"
					},
					"uniqueTournament": {
						"name": "J2 League",
						"slug": "j2-league",
						"primaryColorHex": "#dc351b",
						"category": {
							"name": "Japan",
							"slug": "japan",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 52,
							"country": {
								"alpha2": "JP",
								"alpha3": "JPN",
								"name": "Japan"
							},
							"flag": "japan",
							"alpha2": "JP"
						},
						"userCount": 8070,
						"id": 402,
						"country": {},
						"crowdsourcingEnabled": false,
						"hasPerformanceGraphFeature": true,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 3034
				},
				"season": {
					"name": "J.League 2 2024",
					"year": "2024",
					"editor": false,
					"seasonCoverageInfo": {},
					"id": 57365
				},
				"roundInfo": {
					"round": 30
				},
				"customId": "mpcsdNi",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "Ventforet Kofu",
					"slug": "ventforet-kofu",
					"shortName": "Ventforet Kofu",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 6137,
					"nameCode": "VEN",
					"national": false,
					"type": 0,
					"id": 5762,
					"country": {
						"alpha2": "JP",
						"alpha3": "JPN",
						"name": "Japan"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "فينتفورت كوفو",
							"ru": "Вентфорет Кофу"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Roasso Kumamoto",
					"slug": "roasso-kumamoto",
					"shortName": "Kumamoto",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 4344,
					"nameCode": "ROA",
					"national": false,
					"type": 0,
					"id": 21903,
					"country": {
						"alpha2": "JP",
						"alpha3": "JPN",
						"name": "Japan"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "روسو كوماموتو",
							"ru": "Роассо Кумамото"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 2,
					"display": 2,
					"period1": 0,
					"period2": 2,
					"normaltime": 2
				},
				"awayScore": {
					"current": 4,
					"display": 4,
					"period1": 4,
					"period2": 0,
					"normaltime": 4
				},
				"time": {
					"injuryTime1": 2,
					"injuryTime2": 6,
					"currentPeriodStartTimestamp": 1727265431
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727265433
				},
				"hasGlobalHighlights": false,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12007823,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727258400,
				"slug": "roasso-kumamoto-ventforet-kofu",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Emperor Cup",
					"slug": "emperor-cup",
					"category": {
						"name": "Japan",
						"slug": "japan",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 52,
						"country": {
							"alpha2": "JP",
							"alpha3": "JPN",
							"name": "Japan"
						},
						"flag": "japan",
						"alpha2": "JP"
					},
					"uniqueTournament": {
						"name": "Emperor Cup",
						"slug": "emperor-cup",
						"category": {
							"name": "Japan",
							"slug": "japan",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 52,
							"country": {
								"alpha2": "JP",
								"alpha3": "JPN",
								"name": "Japan"
							},
							"flag": "japan",
							"alpha2": "JP"
						},
						"userCount": 4947,
						"crowdsourcingEnabled": false,
						"hasPerformanceGraphFeature": false,
						"id": 323,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 5126
				},
				"season": {
					"name": "Emperor Cup 2024",
					"year": "2024",
					"editor": false,
					"id": 60629
				},
				"roundInfo": {
					"round": 27,
					"name": "Quarterfinals",
					"cupRoundType": 4
				},
				"customId": "MmbsWmp",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "Yokohama F. Marinos",
					"slug": "yokohama-f-marinos",
					"shortName": "Yokohama FM",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 36689,
					"nameCode": "MAR",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 3137,
					"country": {
						"alpha2": "JP",
						"alpha3": "JPN",
						"name": "Japan"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Йокохама Ф Маринос"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Renofa Yamaguchi FC",
					"slug": "renofa-yamaguchi-fc",
					"shortName": "Yamaguchi",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 2839,
					"nameCode": "REN",
					"national": false,
					"type": 0,
					"id": 38146,
					"country": {
						"alpha2": "JP",
						"alpha3": "JPN",
						"name": "Japan"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Ренофа Ямагучи"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 5,
					"display": 5,
					"period1": 1,
					"period2": 4,
					"normaltime": 5
				},
				"awayScore": {
					"current": 1,
					"display": 1,
					"period1": 1,
					"period2": 0,
					"normaltime": 1
				},
				"time": {
					"injuryTime1": 8,
					"injuryTime2": 4,
					"currentPeriodStartTimestamp": 1727263818
				},
				"changes": {
					"changes": [
						"time.currentPeriodStart",
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime"
					],
					"changeTimestamp": 1727263822
				},
				"hasGlobalHighlights": false,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12726180,
				"homeRedCards": 1,
				"awayRedCards": 1,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727256600,
				"slug": "renofa-yamaguchi-fc-yokohama-marinos",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Emperor Cup",
					"slug": "emperor-cup",
					"category": {
						"name": "Japan",
						"slug": "japan",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 52,
						"country": {
							"alpha2": "JP",
							"alpha3": "JPN",
							"name": "Japan"
						},
						"flag": "japan",
						"alpha2": "JP"
					},
					"uniqueTournament": {
						"name": "Emperor Cup",
						"slug": "emperor-cup",
						"category": {
							"name": "Japan",
							"slug": "japan",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 52,
							"country": {
								"alpha2": "JP",
								"alpha3": "JPN",
								"name": "Japan"
							},
							"flag": "japan",
							"alpha2": "JP"
						},
						"userCount": 4947,
						"crowdsourcingEnabled": false,
						"hasPerformanceGraphFeature": false,
						"id": 323,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 5126
				},
				"season": {
					"name": "Emperor Cup 2024",
					"year": "2024",
					"editor": false,
					"id": 60629
				},
				"roundInfo": {
					"round": 27,
					"name": "Quarterfinals",
					"cupRoundType": 4
				},
				"customId": "JmbsWmb",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "Kashima Antlers",
					"slug": "kashima-antlers",
					"shortName": "Kashima",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 16209,
					"nameCode": "KAS",
					"national": false,
					"type": 0,
					"id": 3134,
					"country": {
						"alpha2": "JP",
						"alpha3": "JPN",
						"name": "Japan"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "كاشيما انتلرز",
							"ru": "Кашима Антлерс"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Vissel Kobe",
					"slug": "vissel-kobe",
					"shortName": "Vissel Kobe",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 25418,
					"nameCode": "VIK",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 3146,
					"country": {
						"alpha2": "JP",
						"alpha3": "JPN",
						"name": "Japan"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "فيسيل كوبي",
							"ru": "Виссел Кобэ"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"awayScore": {
					"current": 3,
					"display": 3,
					"period1": 1,
					"period2": 2,
					"normaltime": 3
				},
				"time": {
					"currentPeriodStartTimestamp": 1727265549
				},
				"changes": {
					"changes": [
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.injuryTime1",
						"time.injuryTime2"
					],
					"changeTimestamp": 1727265571
				},
				"hasGlobalHighlights": false,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12726183,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727258400,
				"slug": "vissel-kobe-kashima-antlers",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Liga de Expansion MX, Apertura",
					"slug": "liga-de-expansion-mx-apertura",
					"category": {
						"name": "Mexico",
						"slug": "mexico",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 12,
						"country": {
							"alpha2": "MX",
							"alpha3": "MEX",
							"name": "Mexico"
						},
						"flag": "mexico",
						"alpha2": "MX"
					},
					"uniqueTournament": {
						"name": "Liga de Expansión MX, Apertura",
						"slug": "liga-de-expansion-mx-apertura",
						"category": {
							"name": "Mexico",
							"slug": "mexico",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 12,
							"country": {
								"alpha2": "MX",
								"alpha3": "MEX",
								"name": "Mexico"
							},
							"flag": "mexico",
							"alpha2": "MX"
						},
						"userCount": 5025,
						"crowdsourcingEnabled": false,
						"hasPerformanceGraphFeature": false,
						"id": 11611,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 81404
				},
				"season": {
					"name": "Liga de Expansion MX, Apertura 2024",
					"year": "2024",
					"editor": false,
					"id": 63978
				},
				"roundInfo": {
					"round": 1
				},
				"customId": "TNswmw",
				"status": {
					"code": 0,
					"description": "Not started",
					"type": "notstarted"
				},
				"homeTeam": {
					"name": "Celaya FC",
					"slug": "celaya-fc",
					"shortName": "Celaya",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 7710,
					"nameCode": "CEL",
					"national": false,
					"type": 0,
					"id": 53121,
					"country": {
						"alpha2": "MX",
						"alpha3": "MEX",
						"name": "Mexico"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Клуб Селая ФК"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Atlante FC",
					"slug": "atlante-fc",
					"shortName": "Atlante",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 9611,
					"nameCode": "ATL",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 1943,
					"country": {
						"alpha2": "MX",
						"alpha3": "MEX",
						"name": "Mexico"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Атланте ФК"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {},
				"awayScore": {},
				"time": {},
				"changes": {
					"changeTimestamp": 0
				},
				"hasGlobalHighlights": false,
				"detailId": 6,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12817322,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727312400,
				"slug": "celaya-fc-atlante-fc",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Botola Pro D1",
					"slug": "botola",
					"category": {
						"name": "Morocco",
						"slug": "morocco",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 303,
						"country": {
							"alpha2": "MA",
							"alpha3": "MAR",
							"name": "Morocco"
						},
						"flag": "morocco",
						"alpha2": "MA"
					},
					"uniqueTournament": {
						"name": "Botola Pro",
						"slug": "botola-pro",
						"category": {
							"name": "Morocco",
							"slug": "morocco",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 303,
							"country": {
								"alpha2": "MA",
								"alpha3": "MAR",
								"name": "Morocco"
							},
							"flag": "morocco",
							"alpha2": "MA"
						},
						"userCount": 34890,
						"id": 937,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 3640
				},
				"season": {
					"name": "Botola Pro D1 24/25",
					"year": "24/25",
					"editor": false,
					"id": 65433
				},
				"roundInfo": {
					"round": 2
				},
				"customId": "MaxsVhH",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "Olympic Safi",
					"slug": "olympic-safi",
					"shortName": "OC Safi",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 6762,
					"nameCode": "OLY",
					"national": false,
					"type": 0,
					"id": 55037,
					"country": {
						"alpha2": "MA",
						"alpha3": "MAR",
						"name": "Morocco"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Олимпик де Сафи"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "RS Berkane",
					"slug": "rs-berkane",
					"shortName": "RS Berkane",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 25904,
					"nameCode": "RSB",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 80395,
					"country": {
						"alpha2": "MA",
						"alpha3": "MAR",
						"name": "Morocco"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Рсб Беркан"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"awayScore": {
					"current": 2,
					"display": 2,
					"period1": 1,
					"period2": 1,
					"normaltime": 2
				},
				"time": {
					"injuryTime1": 4,
					"injuryTime2": 5,
					"currentPeriodStartTimestamp": 1727283491
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727283493
				},
				"hasGlobalHighlights": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12809060,
				"homeRedCards": 1,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727276400,
				"slug": "rs-berkane-olympic-safi",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Botola Pro D1",
					"slug": "botola",
					"category": {
						"name": "Morocco",
						"slug": "morocco",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 303,
						"country": {
							"alpha2": "MA",
							"alpha3": "MAR",
							"name": "Morocco"
						},
						"flag": "morocco",
						"alpha2": "MA"
					},
					"uniqueTournament": {
						"name": "Botola Pro",
						"slug": "botola-pro",
						"category": {
							"name": "Morocco",
							"slug": "morocco",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 303,
							"country": {
								"alpha2": "MA",
								"alpha3": "MAR",
								"name": "Morocco"
							},
							"flag": "morocco",
							"alpha2": "MA"
						},
						"userCount": 34890,
						"id": 937,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 3640
				},
				"season": {
					"name": "Botola Pro D1 24/25",
					"year": "24/25",
					"editor": false,
					"id": 65433
				},
				"roundInfo": {
					"round": 2
				},
				"customId": "hKqsFTJ",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "Ittihad Tanger",
					"slug": "ittihad-tanger",
					"shortName": "Ittihad Tanger",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 8978,
					"nameCode": "ITT",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 87180,
					"country": {
						"alpha2": "MA",
						"alpha3": "MAR",
						"name": "Morocco"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "إتحاد طنجة",
							"ru": "Иттихад Танжер"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Raja Club Athletic",
					"slug": "raja-club-athletic",
					"shortName": "Raja CA",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 146450,
					"nameCode": "RCA",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 41757,
					"country": {
						"alpha2": "MA",
						"alpha3": "MAR",
						"name": "Morocco"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Раджа Касабланка"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 3,
					"display": 3,
					"period1": 3,
					"period2": 0,
					"normaltime": 3
				},
				"awayScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"time": {
					"injuryTime1": 4,
					"injuryTime2": 8,
					"currentPeriodStartTimestamp": 1727290743
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727290747
				},
				"hasGlobalHighlights": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12809056,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727283600,
				"slug": "ittihad-tanger-raja-club-athletic",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Botola Pro D1",
					"slug": "botola",
					"category": {
						"name": "Morocco",
						"slug": "morocco",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 303,
						"country": {
							"alpha2": "MA",
							"alpha3": "MAR",
							"name": "Morocco"
						},
						"flag": "morocco",
						"alpha2": "MA"
					},
					"uniqueTournament": {
						"name": "Botola Pro",
						"slug": "botola-pro",
						"category": {
							"name": "Morocco",
							"slug": "morocco",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 303,
							"country": {
								"alpha2": "MA",
								"alpha3": "MAR",
								"name": "Morocco"
							},
							"flag": "morocco",
							"alpha2": "MA"
						},
						"userCount": 34890,
						"id": 937,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 3640
				},
				"season": {
					"name": "Botola Pro D1 24/25",
					"year": "24/25",
					"editor": false,
					"id": 65433
				},
				"roundInfo": {
					"round": 2
				},
				"customId": "UMjsAax",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "AS FAR Rabat",
					"slug": "as-far-rabat",
					"shortName": "AS FAR",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 58048,
					"nameCode": "FAR",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 24394,
					"country": {
						"alpha2": "MA",
						"alpha3": "MAR",
						"name": "Morocco"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					}
				},
				"awayTeam": {
					"name": "CODM Meknès",
					"slug": "codm-meknes",
					"shortName": "CODM",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 6155,
					"nameCode": "COD",
					"national": false,
					"type": 0,
					"id": 55025,
					"country": {
						"alpha2": "MA",
						"alpha3": "MAR",
						"name": "Morocco"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					}
				},
				"homeScore": {
					"current": 4,
					"display": 4,
					"period1": 3,
					"period2": 1,
					"normaltime": 4
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"injuryTime1": 3,
					"injuryTime2": 3,
					"currentPeriodStartTimestamp": 1727297611
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727297614
				},
				"hasGlobalHighlights": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12809058,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727290800,
				"slug": "codm-meknes-as-far-rabat",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Campeones Cup",
					"slug": "campeones-cup",
					"category": {
						"name": "North & Central America",
						"slug": "north-central-america",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 1469,
						"country": {},
						"flag": "north-and-central-america"
					},
					"uniqueTournament": {
						"name": "Campeones Cup",
						"slug": "campeones-cup",
						"category": {
							"name": "North & Central America",
							"slug": "north-central-america",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 1469,
							"country": {},
							"flag": "north-and-central-america"
						},
						"userCount": 2686,
						"crowdsourcingEnabled": false,
						"hasPerformanceGraphFeature": false,
						"id": 11454,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 68783
				},
				"season": {
					"name": "Campeones Cup 2024",
					"year": "2024",
					"editor": false,
					"id": 64721
				},
				"roundInfo": {
					"round": 29,
					"name": "Final",
					"cupRoundType": 1
				},
				"customId": "ONseab",
				"status": {
					"code": 31,
					"description": "Halftime",
					"type": "inprogress"
				},
				"homeTeam": {
					"name": "Columbus Crew",
					"slug": "columbus-crew",
					"shortName": "Columbus",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 23454,
					"nameCode": "CLB",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 2504,
					"country": {
						"alpha2": "US",
						"alpha3": "USA",
						"name": "USA"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "كولومبوس كرو",
							"ru": "Коламбус Крю"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Club América",
					"slug": "club-america",
					"shortName": "América",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 120697,
					"nameCode": "AME",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 1939,
					"country": {
						"alpha2": "MX",
						"alpha3": "MEX",
						"name": "Mexico"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "КФ Америка"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"normaltime": 0
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"normaltime": 0
				},
				"time": {
					"currentPeriodStartTimestamp": 1727307720
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description"
					],
					"changeTimestamp": 1727310569
				},
				"hasGlobalHighlights": false,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12626210,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727307000,
				"slug": "columbus-crew-club-america",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "1. MFL",
					"slug": "1-mfl",
					"category": {
						"name": "North Macedonia",
						"slug": "north-macedonia",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 159,
						"country": {
							"alpha2": "MK",
							"alpha3": "MKD",
							"name": "North Macedonia"
						},
						"flag": "macedonia",
						"alpha2": "MK"
					},
					"uniqueTournament": {
						"name": "1. MFL",
						"slug": "1-mfl",
						"category": {
							"name": "North Macedonia",
							"slug": "north-macedonia",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 159,
							"country": {
								"alpha2": "MK",
								"alpha3": "MKD",
								"name": "North Macedonia"
							},
							"flag": "macedonia",
							"alpha2": "MK"
						},
						"userCount": 2244,
						"id": 199,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 1950
				},
				"season": {
					"name": "1. MFL 24/25",
					"year": "24/25",
					"editor": false,
					"id": 64685
				},
				"roundInfo": {
					"round": 7
				},
				"customId": "BwrstMPb",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 3,
				"homeTeam": {
					"name": "AP Brera Strumica",
					"slug": "ap-brera-strumica",
					"shortName": "AP Brera Strumica",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 1424,
					"nameCode": "AKP",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 226868,
					"country": {
						"alpha2": "MK",
						"alpha3": "MKD",
						"name": "North Macedonia"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "أكاديميا بانديف"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Tikveš Kavadarci",
					"slug": "tikves-kavadarci",
					"shortName": "Tikveš",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 1605,
					"nameCode": "GFK",
					"national": false,
					"type": 0,
					"id": 43576,
					"country": {
						"alpha2": "MK",
						"alpha3": "MKD",
						"name": "North Macedonia"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					}
				},
				"homeScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"currentPeriodStartTimestamp": 1727276087
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727276089
				},
				"hasGlobalHighlights": false,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12621746,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727269200,
				"slug": "ap-brera-strumica-tikves-kavadarci",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "1. MFL",
					"slug": "1-mfl",
					"category": {
						"name": "North Macedonia",
						"slug": "north-macedonia",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 159,
						"country": {
							"alpha2": "MK",
							"alpha3": "MKD",
							"name": "North Macedonia"
						},
						"flag": "macedonia",
						"alpha2": "MK"
					},
					"uniqueTournament": {
						"name": "1. MFL",
						"slug": "1-mfl",
						"category": {
							"name": "North Macedonia",
							"slug": "north-macedonia",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 159,
							"country": {
								"alpha2": "MK",
								"alpha3": "MKD",
								"name": "North Macedonia"
							},
							"flag": "macedonia",
							"alpha2": "MK"
						},
						"userCount": 2244,
						"id": 199,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 1950
				},
				"season": {
					"name": "1. MFL 24/25",
					"year": "24/25",
					"editor": false,
					"id": 64685
				},
				"roundInfo": {
					"round": 7
				},
				"customId": "mecsEwc",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 3,
				"homeTeam": {
					"name": "FK Pelister Bitola",
					"slug": "fk-pelister-bitola",
					"shortName": "Pelister",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 870,
					"nameCode": "PEL",
					"national": false,
					"type": 0,
					"id": 6079,
					"country": {
						"alpha2": "MK",
						"alpha3": "MKD",
						"name": "North Macedonia"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "إف كيه بيليستير بيتولا",
							"ru": "ФК Пелистер Битола"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "FK Rabotnički Skopje",
					"slug": "fk-rabotnicki-skopje",
					"shortName": "Rabotnički",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 889,
					"nameCode": "RBS",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 5212,
					"country": {
						"alpha2": "MK",
						"alpha3": "MKD",
						"name": "North Macedonia"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "اف كيه رابوتنيكي سكوبيه",
							"ru": "ФК Работнички Скопье"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"injuryTime1": 2,
					"injuryTime2": 3,
					"currentPeriodStartTimestamp": 1727275789
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727275792
				},
				"hasGlobalHighlights": false,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12621745,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727269200,
				"slug": "fk-pelister-bitola-fk-rabotnicki-skopje",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "1. MFL",
					"slug": "1-mfl",
					"category": {
						"name": "North Macedonia",
						"slug": "north-macedonia",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 159,
						"country": {
							"alpha2": "MK",
							"alpha3": "MKD",
							"name": "North Macedonia"
						},
						"flag": "macedonia",
						"alpha2": "MK"
					},
					"uniqueTournament": {
						"name": "1. MFL",
						"slug": "1-mfl",
						"category": {
							"name": "North Macedonia",
							"slug": "north-macedonia",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 159,
							"country": {
								"alpha2": "MK",
								"alpha3": "MKD",
								"name": "North Macedonia"
							},
							"flag": "macedonia",
							"alpha2": "MK"
						},
						"userCount": 2244,
						"id": 199,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 1950
				},
				"season": {
					"name": "1. MFL 24/25",
					"year": "24/25",
					"editor": false,
					"id": 64685
				},
				"roundInfo": {
					"round": 7
				},
				"customId": "nicsAwr",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "KF Gostivar",
					"slug": "kf-gostivar",
					"shortName": "Gostivar",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 947,
					"nameCode": "GOS",
					"national": false,
					"type": 0,
					"id": 43575,
					"country": {
						"alpha2": "MK",
						"alpha3": "MKD",
						"name": "North Macedonia"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					}
				},
				"awayTeam": {
					"name": "KF Shkëndija",
					"slug": "kf-shkendija",
					"shortName": "Shkëndija",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 5330,
					"nameCode": "SHK",
					"national": false,
					"type": 0,
					"id": 5413,
					"country": {
						"alpha2": "MK",
						"alpha3": "MKD",
						"name": "North Macedonia"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "نادي شكينديا",
							"ru": "ФК Шкендия"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 3,
					"display": 3,
					"period1": 1,
					"period2": 2,
					"normaltime": 3
				},
				"awayScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"time": {
					"currentPeriodStartTimestamp": 1727276357
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727276359
				},
				"hasGlobalHighlights": false,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12621749,
				"homeRedCards": 1,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727269200,
				"slug": "kf-gostivar-kf-shkendija",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "1. MFL",
					"slug": "1-mfl",
					"category": {
						"name": "North Macedonia",
						"slug": "north-macedonia",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 159,
						"country": {
							"alpha2": "MK",
							"alpha3": "MKD",
							"name": "North Macedonia"
						},
						"flag": "macedonia",
						"alpha2": "MK"
					},
					"uniqueTournament": {
						"name": "1. MFL",
						"slug": "1-mfl",
						"category": {
							"name": "North Macedonia",
							"slug": "north-macedonia",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 159,
							"country": {
								"alpha2": "MK",
								"alpha3": "MKD",
								"name": "North Macedonia"
							},
							"flag": "macedonia",
							"alpha2": "MK"
						},
						"userCount": 2244,
						"id": 199,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 1950
				},
				"season": {
					"name": "1. MFL 24/25",
					"year": "24/25",
					"editor": false,
					"id": 64685
				},
				"roundInfo": {
					"round": 7
				},
				"customId": "YFebsnkgd",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 3,
				"homeTeam": {
					"name": "KF Shkupi",
					"slug": "kf-shkupi",
					"shortName": "Shkupi",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 5123,
					"nameCode": "SHK",
					"national": false,
					"type": 0,
					"id": 136548,
					"country": {
						"alpha2": "MK",
						"alpha3": "MKD",
						"name": "North Macedonia"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "شكوبي كير",
							"ru": "ФК Шкупи"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Besa 1976",
					"slug": "besa-1976",
					"shortName": "Besa",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 621,
					"nameCode": "BES",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 390513,
					"country": {},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					}
				},
				"homeScore": {
					"current": 1,
					"display": 1,
					"period1": 1,
					"period2": 0,
					"normaltime": 1
				},
				"awayScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"time": {
					"injuryTime1": 1,
					"injuryTime2": 4,
					"currentPeriodStartTimestamp": 1727275856
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727275858
				},
				"hasGlobalHighlights": false,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12621747,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727269200,
				"slug": "besa-1976-kf-shkupi",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "1. MFL",
					"slug": "1-mfl",
					"category": {
						"name": "North Macedonia",
						"slug": "north-macedonia",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 159,
						"country": {
							"alpha2": "MK",
							"alpha3": "MKD",
							"name": "North Macedonia"
						},
						"flag": "macedonia",
						"alpha2": "MK"
					},
					"uniqueTournament": {
						"name": "1. MFL",
						"slug": "1-mfl",
						"category": {
							"name": "North Macedonia",
							"slug": "north-macedonia",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 159,
							"country": {
								"alpha2": "MK",
								"alpha3": "MKD",
								"name": "North Macedonia"
							},
							"flag": "macedonia",
							"alpha2": "MK"
						},
						"userCount": 2244,
						"id": 199,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 1950
				},
				"season": {
					"name": "1. MFL 24/25",
					"year": "24/25",
					"editor": false,
					"id": 64685
				},
				"roundInfo": {
					"round": 7
				},
				"customId": "wHdcsaEfd",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 3,
				"homeTeam": {
					"name": "Voska Sport",
					"slug": "voska-sport",
					"shortName": "Voska Sport",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 1204,
					"nameCode": "VOS",
					"national": false,
					"type": 0,
					"id": 388950,
					"country": {
						"alpha2": "MK",
						"alpha3": "MKD",
						"name": "North Macedonia"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					}
				},
				"awayTeam": {
					"name": "FC Struga Trim & Lum",
					"slug": "fc-struga-trim-and-lum",
					"shortName": "Struga T&L",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 6581,
					"nameCode": "STL",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 259121,
					"country": {
						"alpha2": "MK",
						"alpha3": "MKD",
						"name": "North Macedonia"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "إف سي ستروجا تريم لوم"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"awayScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"time": {
					"currentPeriodStartTimestamp": 1727275996
				},
				"changes": {
					"changes": [
						"cardsCode"
					],
					"changeTimestamp": 1727290117
				},
				"hasGlobalHighlights": false,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12621748,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727269200,
				"slug": "voska-sport-fc-struga-trim-and-lum",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "1. MFL",
					"slug": "1-mfl",
					"category": {
						"name": "North Macedonia",
						"slug": "north-macedonia",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 159,
						"country": {
							"alpha2": "MK",
							"alpha3": "MKD",
							"name": "North Macedonia"
						},
						"flag": "macedonia",
						"alpha2": "MK"
					},
					"uniqueTournament": {
						"name": "1. MFL",
						"slug": "1-mfl",
						"category": {
							"name": "North Macedonia",
							"slug": "north-macedonia",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 159,
							"country": {
								"alpha2": "MK",
								"alpha3": "MKD",
								"name": "North Macedonia"
							},
							"flag": "macedonia",
							"alpha2": "MK"
						},
						"userCount": 2244,
						"id": 199,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 1950
				},
				"season": {
					"name": "1. MFL 24/25",
					"year": "24/25",
					"editor": false,
					"id": 64685
				},
				"roundInfo": {
					"round": 7
				},
				"customId": "dicshic",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "FK Vardar Skopje",
					"slug": "fk-vardar-skopje",
					"shortName": "Vardar",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 2405,
					"nameCode": "VAR",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 5403,
					"country": {
						"alpha2": "MK",
						"alpha3": "MKD",
						"name": "North Macedonia"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "FK Vardar Skopje",
							"ru": "ФК Вардар Скопье"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "FK Sileks Kratovo",
					"slug": "fk-sileks-kratovo",
					"shortName": "Sileks",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 1077,
					"nameCode": "SIK",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 5407,
					"country": {
						"alpha2": "MK",
						"alpha3": "MKD",
						"name": "North Macedonia"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "إف كيه سيليكس كراتوفو",
							"ru": "ФК Силекс Кратово"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"awayScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"time": {
					"currentPeriodStartTimestamp": 1727293867
				},
				"changes": {
					"changes": [
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727294781
				},
				"hasGlobalHighlights": false,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12621750,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727287200,
				"slug": "fk-sileks-kratovo-fk-vardar-skopje",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Premiership",
					"slug": "premiership",
					"category": {
						"name": "Northern Ireland",
						"slug": "northern-ireland",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 130,
						"country": {
							"alpha2": "NX",
							"alpha3": "NIR",
							"name": "Northern Ireland"
						},
						"flag": "northern-ireland",
						"alpha2": "NX"
					},
					"uniqueTournament": {
						"name": "NIFL Premiership",
						"slug": "premiership",
						"category": {
							"name": "Northern Ireland",
							"slug": "northern-ireland",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 130,
							"country": {
								"alpha2": "NX",
								"alpha3": "NIR",
								"name": "Northern Ireland"
							},
							"flag": "northern-ireland",
							"alpha2": "NX"
						},
						"userCount": 6078,
						"id": 200,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 883
				},
				"season": {
					"name": "Premiership 24/25",
					"year": "24/25",
					"editor": false,
					"id": 62405
				},
				"roundInfo": {
					"round": 1
				},
				"customId": "JdcsBfc",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "Larne FC",
					"slug": "larne-fc",
					"shortName": "Larne FC",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 16658,
					"nameCode": "LAM",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 5184,
					"country": {
						"alpha2": "NX",
						"alpha3": "NIR",
						"name": "Northern Ireland"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "لارن FC",
							"ru": "Ларн"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Loughgall",
					"slug": "loughgall",
					"shortName": "Loughgall",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 2002,
					"nameCode": "LOU",
					"national": false,
					"type": 0,
					"id": 5276,
					"country": {
						"alpha2": "NX",
						"alpha3": "NIR",
						"name": "Northern Ireland"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					}
				},
				"homeScore": {
					"current": 2,
					"display": 2,
					"period1": 1,
					"period2": 1,
					"normaltime": 2
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"currentPeriodStartTimestamp": 1727207520
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime"
					],
					"changeTimestamp": 1727210529
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12887409,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727203500,
				"slug": "loughgall-larne-fc",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "1st Division",
					"slug": "1st-division",
					"category": {
						"name": "Norway",
						"slug": "norway",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 5,
						"country": {
							"alpha2": "NO",
							"alpha3": "NOR",
							"name": "Norway"
						},
						"flag": "norway",
						"alpha2": "NO"
					},
					"uniqueTournament": {
						"name": "Norwegian 1st Division",
						"slug": "1st-division",
						"category": {
							"name": "Norway",
							"slug": "norway",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 5,
							"country": {
								"alpha2": "NO",
								"alpha3": "NOR",
								"name": "Norway"
							},
							"flag": "norway",
							"alpha2": "NO"
						},
						"userCount": 9189,
						"id": 22,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 6
				},
				"season": {
					"name": "1st Division 2024",
					"year": "2024",
					"editor": false,
					"id": 57356
				},
				"roundInfo": {
					"round": 24
				},
				"customId": "Cnspy",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "Vålerenga IF",
					"slug": "valerenga-if",
					"shortName": "Vålerenga",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 15048,
					"nameCode": "VIF",
					"national": false,
					"type": 0,
					"id": 1165,
					"country": {
						"alpha2": "NO",
						"alpha3": "NOR",
						"name": "Norway"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "فاليرينيا",
							"ru": "Валеренга"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Aalesunds FK",
					"slug": "aalesunds-fk",
					"shortName": "Aalesund",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 8932,
					"nameCode": "AFK",
					"national": false,
					"type": 0,
					"id": 677,
					"country": {
						"alpha2": "NO",
						"alpha3": "NOR",
						"name": "Norway"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "أليسوندز",
							"ru": "ФК Олесунд"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 4,
					"display": 4,
					"period1": 2,
					"period2": 2,
					"normaltime": 4
				},
				"awayScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"time": {
					"injuryTime1": 2,
					"injuryTime2": 5,
					"currentPeriodStartTimestamp": 1727203975
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727203978
				},
				"hasGlobalHighlights": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 11918279,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727197200,
				"slug": "valerenga-if-aalesunds-fk",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "1st Division",
					"slug": "1st-division",
					"category": {
						"name": "Norway",
						"slug": "norway",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 5,
						"country": {
							"alpha2": "NO",
							"alpha3": "NOR",
							"name": "Norway"
						},
						"flag": "norway",
						"alpha2": "NO"
					},
					"uniqueTournament": {
						"name": "Norwegian 1st Division",
						"slug": "1st-division",
						"category": {
							"name": "Norway",
							"slug": "norway",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 5,
							"country": {
								"alpha2": "NO",
								"alpha3": "NOR",
								"name": "Norway"
							},
							"flag": "norway",
							"alpha2": "NO"
						},
						"userCount": 9189,
						"id": 22,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 6
				},
				"season": {
					"name": "1st Division 2024",
					"year": "2024",
					"editor": false,
					"id": 57356
				},
				"roundInfo": {
					"round": 24
				},
				"customId": "vtsmy",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "Egersund",
					"slug": "egersund",
					"shortName": "Egersund",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 6942,
					"nameCode": "EIK",
					"national": false,
					"type": 0,
					"id": 920,
					"country": {
						"alpha2": "NO",
						"alpha3": "NOR",
						"name": "Norway"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "ФК Эгерсунд"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Stabæk Fotball",
					"slug": "stabaek-fotball",
					"shortName": "Stabæk",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 8054,
					"nameCode": "STA",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 1162,
					"country": {
						"alpha2": "NO",
						"alpha3": "NOR",
						"name": "Norway"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "ستايبك",
							"ru": "ФК Стабек"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 2,
					"display": 2,
					"period1": 1,
					"period2": 1,
					"normaltime": 2
				},
				"awayScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"time": {
					"injuryTime1": 2,
					"injuryTime2": 6,
					"currentPeriodStartTimestamp": 1727279745
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727279749
				},
				"hasGlobalHighlights": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 11918272,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727272800,
				"slug": "stabaek-fotball-egersund",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "1st Division",
					"slug": "1st-division",
					"category": {
						"name": "Norway",
						"slug": "norway",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 5,
						"country": {
							"alpha2": "NO",
							"alpha3": "NOR",
							"name": "Norway"
						},
						"flag": "norway",
						"alpha2": "NO"
					},
					"uniqueTournament": {
						"name": "Norwegian 1st Division",
						"slug": "1st-division",
						"category": {
							"name": "Norway",
							"slug": "norway",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 5,
							"country": {
								"alpha2": "NO",
								"alpha3": "NOR",
								"name": "Norway"
							},
							"flag": "norway",
							"alpha2": "NO"
						},
						"userCount": 9189,
						"id": 22,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 6
				},
				"season": {
					"name": "1st Division 2024",
					"year": "2024",
					"editor": false,
					"id": 57356
				},
				"roundInfo": {
					"round": 24
				},
				"customId": "rnsHn",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "IK Start",
					"slug": "ik-start",
					"shortName": "IK Start",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 7798,
					"nameCode": "STA",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 667,
					"country": {
						"alpha2": "NO",
						"alpha3": "NOR",
						"name": "Norway"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "ستارت",
							"ru": "ФК Старт"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Åsane",
					"slug": "asane",
					"shortName": "Åsane",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 5828,
					"nameCode": "ASA",
					"national": false,
					"type": 0,
					"id": 682,
					"country": {
						"alpha2": "NO",
						"alpha3": "NOR",
						"name": "Norway"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "ФК Асан"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 3,
					"display": 3,
					"period1": 0,
					"period2": 3,
					"normaltime": 3
				},
				"awayScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"time": {
					"injuryTime1": 1,
					"injuryTime2": 4,
					"currentPeriodStartTimestamp": 1727290375
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727290378
				},
				"hasGlobalHighlights": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 11918278,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727283600,
				"slug": "asane-ik-start",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "1st Division",
					"slug": "1st-division",
					"category": {
						"name": "Norway",
						"slug": "norway",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 5,
						"country": {
							"alpha2": "NO",
							"alpha3": "NOR",
							"name": "Norway"
						},
						"flag": "norway",
						"alpha2": "NO"
					},
					"uniqueTournament": {
						"name": "Norwegian 1st Division",
						"slug": "1st-division",
						"category": {
							"name": "Norway",
							"slug": "norway",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 5,
							"country": {
								"alpha2": "NO",
								"alpha3": "NOR",
								"name": "Norway"
							},
							"flag": "norway",
							"alpha2": "NO"
						},
						"userCount": 9189,
						"id": 22,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 6
				},
				"season": {
					"name": "1st Division 2024",
					"year": "2024",
					"editor": false,
					"id": 57356
				},
				"roundInfo": {
					"round": 24
				},
				"customId": "hnsqr",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "Levanger",
					"slug": "levanger",
					"shortName": "Levanger",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 5807,
					"nameCode": "LEV",
					"national": false,
					"type": 0,
					"id": 866,
					"country": {
						"alpha2": "NO",
						"alpha3": "NOR",
						"name": "Norway"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "ФК Левангер"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Lyn FK",
					"slug": "lyn-fk",
					"shortName": "Lyn",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 6877,
					"nameCode": "LYN",
					"national": false,
					"type": 0,
					"id": 657,
					"country": {
						"alpha2": "NO",
						"alpha3": "NOR",
						"name": "Norway"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "ФК Люн"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 1,
					"display": 1,
					"period1": 1,
					"period2": 0,
					"normaltime": 1
				},
				"awayScore": {
					"current": 3,
					"display": 3,
					"period1": 2,
					"period2": 1,
					"normaltime": 3
				},
				"time": {
					"injuryTime2": 4,
					"currentPeriodStartTimestamp": 1727290334
				},
				"changes": {
					"changes": [
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime"
					],
					"changeTimestamp": 1727290401
				},
				"hasGlobalHighlights": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 11918273,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727283600,
				"slug": "levanger-lyn-fk",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "1st Division",
					"slug": "1st-division",
					"category": {
						"name": "Norway",
						"slug": "norway",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 5,
						"country": {
							"alpha2": "NO",
							"alpha3": "NOR",
							"name": "Norway"
						},
						"flag": "norway",
						"alpha2": "NO"
					},
					"uniqueTournament": {
						"name": "Norwegian 1st Division",
						"slug": "1st-division",
						"category": {
							"name": "Norway",
							"slug": "norway",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 5,
							"country": {
								"alpha2": "NO",
								"alpha3": "NOR",
								"name": "Norway"
							},
							"flag": "norway",
							"alpha2": "NO"
						},
						"userCount": 9189,
						"id": 22,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 6
				},
				"season": {
					"name": "1st Division 2024",
					"year": "2024",
					"editor": false,
					"id": 57356
				},
				"roundInfo": {
					"round": 24
				},
				"customId": "xnsdt",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "Mjøndalen",
					"slug": "mjondalen",
					"shortName": "Mjøndalen",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 5091,
					"nameCode": "MJO",
					"national": false,
					"type": 0,
					"id": 903,
					"country": {
						"alpha2": "NO",
						"alpha3": "NOR",
						"name": "Norway"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "ФК Мьёндален"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Kongsvinger",
					"slug": "kongsvinger",
					"shortName": "Kongsvinger",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 7339,
					"nameCode": "KIL",
					"national": false,
					"type": 0,
					"id": 672,
					"country": {
						"alpha2": "NO",
						"alpha3": "NOR",
						"name": "Norway"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "كونجفينغر",
							"ru": "ФК Конгсвингер"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"awayScore": {
					"current": 2,
					"display": 2,
					"period1": 0,
					"period2": 2,
					"normaltime": 2
				},
				"time": {
					"injuryTime1": 2,
					"injuryTime2": 6,
					"currentPeriodStartTimestamp": 1727290416
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727290420
				},
				"hasGlobalHighlights": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 11918274,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727283600,
				"slug": "mjondalen-kongsvinger",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "1st Division",
					"slug": "1st-division",
					"category": {
						"name": "Norway",
						"slug": "norway",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 5,
						"country": {
							"alpha2": "NO",
							"alpha3": "NOR",
							"name": "Norway"
						},
						"flag": "norway",
						"alpha2": "NO"
					},
					"uniqueTournament": {
						"name": "Norwegian 1st Division",
						"slug": "1st-division",
						"category": {
							"name": "Norway",
							"slug": "norway",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 5,
							"country": {
								"alpha2": "NO",
								"alpha3": "NOR",
								"name": "Norway"
							},
							"flag": "norway",
							"alpha2": "NO"
						},
						"userCount": 9189,
						"id": 22,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 6
				},
				"season": {
					"name": "1st Division 2024",
					"year": "2024",
					"editor": false,
					"id": 57356
				},
				"roundInfo": {
					"round": 24
				},
				"customId": "mnsEt",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "Moss FK",
					"slug": "moss-fk",
					"shortName": "Moss FK",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 5595,
					"nameCode": "MFK",
					"national": false,
					"type": 0,
					"id": 662,
					"country": {
						"alpha2": "NO",
						"alpha3": "NOR",
						"name": "Norway"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "موس",
							"ru": "ФК Мосс"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Sandnes Ulf",
					"slug": "sandnes-ulf",
					"shortName": "Sandnes",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 5712,
					"nameCode": "SAN",
					"national": false,
					"type": 0,
					"id": 929,
					"country": {
						"alpha2": "NO",
						"alpha3": "NOR",
						"name": "Norway"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "ساندنيس",
							"ru": "ФК Санднес"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 6,
					"display": 6,
					"period1": 2,
					"period2": 4,
					"normaltime": 6
				},
				"awayScore": {
					"current": 1,
					"display": 1,
					"period1": 1,
					"period2": 0,
					"normaltime": 1
				},
				"time": {
					"injuryTime1": 3,
					"injuryTime2": 3,
					"currentPeriodStartTimestamp": 1727290293
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727290297
				},
				"hasGlobalHighlights": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 11918275,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727283600,
				"slug": "sandnes-ulf-moss-fk",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "1st Division",
					"slug": "1st-division",
					"category": {
						"name": "Norway",
						"slug": "norway",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 5,
						"country": {
							"alpha2": "NO",
							"alpha3": "NOR",
							"name": "Norway"
						},
						"flag": "norway",
						"alpha2": "NO"
					},
					"uniqueTournament": {
						"name": "Norwegian 1st Division",
						"slug": "1st-division",
						"category": {
							"name": "Norway",
							"slug": "norway",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 5,
							"country": {
								"alpha2": "NO",
								"alpha3": "NOR",
								"name": "Norway"
							},
							"flag": "norway",
							"alpha2": "NO"
						},
						"userCount": 9189,
						"id": 22,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 6
				},
				"season": {
					"name": "1st Division 2024",
					"year": "2024",
					"editor": false,
					"id": 57356
				},
				"roundInfo": {
					"round": 24
				},
				"customId": "tnsio",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 3,
				"homeTeam": {
					"name": "Raufoss",
					"slug": "raufoss",
					"shortName": "Raufoss",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 5289,
					"nameCode": "RAU",
					"national": false,
					"type": 0,
					"id": 668,
					"country": {
						"alpha2": "NO",
						"alpha3": "NOR",
						"name": "Norway"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "ФК Рафосс"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Ranheim IL",
					"slug": "ranheim-il",
					"shortName": "Ranheim",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 7247,
					"nameCode": "RAN",
					"national": false,
					"type": 0,
					"id": 708,
					"country": {
						"alpha2": "NO",
						"alpha3": "NOR",
						"name": "Norway"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "رانهايم",
							"ru": "ФК Ранхейм"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"awayScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"time": {
					"injuryTime1": 1,
					"injuryTime2": 2,
					"currentPeriodStartTimestamp": 1727290293
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727290297
				},
				"hasGlobalHighlights": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 11918276,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727283600,
				"slug": "ranheim-il-raufoss",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "1st Division",
					"slug": "1st-division",
					"category": {
						"name": "Norway",
						"slug": "norway",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 5,
						"country": {
							"alpha2": "NO",
							"alpha3": "NOR",
							"name": "Norway"
						},
						"flag": "norway",
						"alpha2": "NO"
					},
					"uniqueTournament": {
						"name": "Norwegian 1st Division",
						"slug": "1st-division",
						"category": {
							"name": "Norway",
							"slug": "norway",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 5,
							"country": {
								"alpha2": "NO",
								"alpha3": "NOR",
								"name": "Norway"
							},
							"flag": "norway",
							"alpha2": "NO"
						},
						"userCount": 9189,
						"id": 22,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 6
				},
				"season": {
					"name": "1st Division 2024",
					"year": "2024",
					"editor": false,
					"id": 57356
				},
				"roundInfo": {
					"round": 24
				},
				"customId": "nnspn",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "Sogndal IL",
					"slug": "sogndal-il",
					"shortName": "Sogndal",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 5678,
					"nameCode": "SIL",
					"national": false,
					"type": 0,
					"id": 665,
					"country": {
						"alpha2": "NO",
						"alpha3": "NOR",
						"name": "Norway"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "سوغندال",
							"ru": "ФК Сондаль"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Bryne FK",
					"slug": "bryne-fk",
					"shortName": "Bryne FK",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 7181,
					"nameCode": "BRY",
					"national": false,
					"type": 0,
					"id": 663,
					"country": {
						"alpha2": "NO",
						"alpha3": "NOR",
						"name": "Norway"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "براين",
							"ru": "ФК Брюн"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 2,
					"display": 2,
					"period1": 2,
					"period2": 0,
					"normaltime": 2
				},
				"awayScore": {
					"current": 3,
					"display": 3,
					"period1": 3,
					"period2": 0,
					"normaltime": 3
				},
				"time": {
					"injuryTime2": 6,
					"currentPeriodStartTimestamp": 1727290517
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727290519
				},
				"hasGlobalHighlights": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 11918277,
				"homeRedCards": 1,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727283600,
				"slug": "sogndal-il-bryne-fk",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Liga II",
					"slug": "liga-ii",
					"category": {
						"name": "Romania",
						"slug": "romania",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 77,
						"country": {
							"alpha2": "RO",
							"alpha3": "ROU",
							"name": "Romania"
						},
						"flag": "romania",
						"alpha2": "RO"
					},
					"uniqueTournament": {
						"name": "Liga II",
						"slug": "liga-ii",
						"category": {
							"name": "Romania",
							"slug": "romania",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 77,
							"country": {
								"alpha2": "RO",
								"alpha3": "ROU",
								"name": "Romania"
							},
							"flag": "romania",
							"alpha2": "RO"
						},
						"userCount": 3821,
						"id": 562,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 55408
				},
				"season": {
					"name": "Liga 2 24/25",
					"year": "24/25",
					"editor": false,
					"id": 64111
				},
				"roundInfo": {
					"round": 7
				},
				"customId": "epecsxEnc",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "FK Csíkszereda Miercurea Ciuc",
					"slug": "fk-csikszereda-miercurea-ciuc",
					"shortName": "FK Csíkszereda",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 4058,
					"nameCode": "CSI",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 283972,
					"country": {
						"alpha2": "RO",
						"alpha3": "ROU",
						"name": "Romania"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Меркуря-Чук"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "CSC Dumbrăviţa",
					"slug": "csc-dumbravita",
					"shortName": "Dumbrăvița",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 2062,
					"nameCode": "DUM",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 260754,
					"country": {
						"alpha2": "RO",
						"alpha3": "ROU",
						"name": "Romania"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					}
				},
				"homeScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"currentPeriodStartTimestamp": 1727195520
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime"
					],
					"changeTimestamp": 1727198565
				},
				"hasGlobalHighlights": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12618999,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727191800,
				"slug": "fk-csikszereda-miercurea-ciuc-csc-dumbravita",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Liga II",
					"slug": "liga-ii",
					"category": {
						"name": "Romania",
						"slug": "romania",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 77,
						"country": {
							"alpha2": "RO",
							"alpha3": "ROU",
							"name": "Romania"
						},
						"flag": "romania",
						"alpha2": "RO"
					},
					"uniqueTournament": {
						"name": "Liga II",
						"slug": "liga-ii",
						"category": {
							"name": "Romania",
							"slug": "romania",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 77,
							"country": {
								"alpha2": "RO",
								"alpha3": "ROU",
								"name": "Romania"
							},
							"flag": "romania",
							"alpha2": "RO"
						},
						"userCount": 3821,
						"id": 562,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 55408
				},
				"season": {
					"name": "Liga 2 24/25",
					"year": "24/25",
					"editor": false,
					"id": 64111
				},
				"roundInfo": {
					"round": 2
				},
				"customId": "DpjbstDFc",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "CS Unirea Ungheni 2018",
					"slug": "cs-unirea-ungheni-2018",
					"shortName": "Unirea Ungheni",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 924,
					"nameCode": "UNI",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 326418,
					"country": {
						"alpha2": "RO",
						"alpha3": "ROU",
						"name": "Romania"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					}
				},
				"awayTeam": {
					"name": "FC Corvinul Hunedoara",
					"slug": "fc-corvinul-hunedoara",
					"shortName": "Corvinul Hunedoara",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 6322,
					"nameCode": "COR",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 148278,
					"country": {
						"alpha2": "RO",
						"alpha3": "ROU",
						"name": "Romania"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					}
				},
				"homeScore": {
					"current": 1,
					"display": 1,
					"period1": 1,
					"period2": 0,
					"normaltime": 1
				},
				"awayScore": {
					"current": 2,
					"display": 2,
					"period1": 0,
					"period2": 2,
					"normaltime": 2
				},
				"time": {
					"currentPeriodStartTimestamp": 1727276460
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"awayScore.period2",
						"awayScore.normaltime"
					],
					"changeTimestamp": 1727279479
				},
				"hasGlobalHighlights": false,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12887476,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727272800,
				"slug": "cs-unirea-ungheni-2018-fc-corvinul-hunedoara",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "King's Cup",
					"slug": "kings-cup",
					"category": {
						"name": "Saudi Arabia",
						"slug": "saudi-arabia",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 310,
						"country": {
							"alpha2": "SA",
							"alpha3": "SAU",
							"name": "Saudi Arabia"
						},
						"flag": "saudi-arabia",
						"alpha2": "SA"
					},
					"uniqueTournament": {
						"name": "King's Cup",
						"slug": "kings-cup",
						"category": {
							"name": "Saudi Arabia",
							"slug": "saudi-arabia",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 310,
							"country": {
								"alpha2": "SA",
								"alpha3": "SAU",
								"name": "Saudi Arabia"
							},
							"flag": "saudi-arabia",
							"alpha2": "SA"
						},
						"userCount": 29591,
						"crowdsourcingEnabled": false,
						"hasPerformanceGraphFeature": false,
						"id": 2058,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 42021
				},
				"season": {
					"name": "Kings Cup 24/25",
					"year": "24/25",
					"editor": false,
					"id": 61803
				},
				"roundInfo": {
					"round": 6,
					"name": "Round of 32",
					"cupRoundType": 16
				},
				"customId": "VMisMNxc",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "Al-Bukiryah FC",
					"slug": "al-bukiryah-fc",
					"shortName": "Al-Bukiryah",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 4234,
					"nameCode": "BUK",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 306937,
					"country": {
						"alpha2": "SA",
						"alpha3": "SAU",
						"name": "Saudi Arabia"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Аль Букайрия"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Al-Hilal",
					"slug": "al-hilal",
					"shortName": "Al-Hilal",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 753796,
					"nameCode": "HIL",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 21895,
					"country": {
						"alpha2": "SA",
						"alpha3": "SAU",
						"name": "Saudi Arabia"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "الهلال",
							"ru": "Аль-Хилал (КСА)"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"awayScore": {
					"current": 1,
					"display": 1,
					"period1": 1,
					"period2": 0,
					"normaltime": 1
				},
				"time": {
					"injuryTime1": 3,
					"injuryTime2": 8,
					"currentPeriodStartTimestamp": 1727196057
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727199303
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12453662,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727192100,
				"slug": "al-bukiryah-fc-al-hilal",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "King's Cup",
					"slug": "kings-cup",
					"category": {
						"name": "Saudi Arabia",
						"slug": "saudi-arabia",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 310,
						"country": {
							"alpha2": "SA",
							"alpha3": "SAU",
							"name": "Saudi Arabia"
						},
						"flag": "saudi-arabia",
						"alpha2": "SA"
					},
					"uniqueTournament": {
						"name": "King's Cup",
						"slug": "kings-cup",
						"category": {
							"name": "Saudi Arabia",
							"slug": "saudi-arabia",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 310,
							"country": {
								"alpha2": "SA",
								"alpha3": "SAU",
								"name": "Saudi Arabia"
							},
							"flag": "saudi-arabia",
							"alpha2": "SA"
						},
						"userCount": 29591,
						"crowdsourcingEnabled": false,
						"hasPerformanceGraphFeature": false,
						"id": 2058,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 42021
				},
				"season": {
					"name": "Kings Cup 24/25",
					"year": "24/25",
					"editor": false,
					"id": 61803
				},
				"roundInfo": {
					"round": 6,
					"name": "Round of 32",
					"cupRoundType": 16
				},
				"customId": "yvxsdkKb",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "Al-Jabalain",
					"slug": "al-jabalain",
					"shortName": "Al-Jabalain",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 6628,
					"nameCode": "JAB",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 213003,
					"country": {
						"alpha2": "SA",
						"alpha3": "SAU",
						"name": "Saudi Arabia"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "الجبلين",
							"ru": "Аль Джабалайн"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Al-Fateh",
					"slug": "al-fateh",
					"shortName": "Al-Fateh",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 21424,
					"nameCode": "FAT",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 56023,
					"country": {
						"alpha2": "SA",
						"alpha3": "SAU",
						"name": "Saudi Arabia"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "الفتح",
							"ru": "Аль Фатех СК"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 2,
					"display": 2,
					"period1": 1,
					"period2": 1,
					"normaltime": 2
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"injuryTime1": 9,
					"injuryTime2": 9,
					"currentPeriodStartTimestamp": 1727196925
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727200169
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12453660,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727192700,
				"slug": "al-jabalain-al-fateh",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "King's Cup",
					"slug": "kings-cup",
					"category": {
						"name": "Saudi Arabia",
						"slug": "saudi-arabia",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 310,
						"country": {
							"alpha2": "SA",
							"alpha3": "SAU",
							"name": "Saudi Arabia"
						},
						"flag": "saudi-arabia",
						"alpha2": "SA"
					},
					"uniqueTournament": {
						"name": "King's Cup",
						"slug": "kings-cup",
						"category": {
							"name": "Saudi Arabia",
							"slug": "saudi-arabia",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 310,
							"country": {
								"alpha2": "SA",
								"alpha3": "SAU",
								"name": "Saudi Arabia"
							},
							"flag": "saudi-arabia",
							"alpha2": "SA"
						},
						"userCount": 29591,
						"crowdsourcingEnabled": false,
						"hasPerformanceGraphFeature": false,
						"id": 2058,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 42021
				},
				"season": {
					"name": "Kings Cup 24/25",
					"year": "24/25",
					"editor": false,
					"id": 61803
				},
				"roundInfo": {
					"round": 6,
					"name": "Round of 32",
					"cupRoundType": 16
				},
				"customId": "pLnsUAXb",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "Al-Ittihad",
					"slug": "al-ittihad",
					"shortName": "Al-Ittihad",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 379682,
					"nameCode": "ITJ",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 34315,
					"country": {
						"alpha2": "SA",
						"alpha3": "SAU",
						"name": "Saudi Arabia"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "الاتحاد"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Al Ain",
					"slug": "al-ain",
					"shortName": "Al Ain",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 6555,
					"nameCode": "AIN",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 243794,
					"country": {
						"alpha2": "SA",
						"alpha3": "SAU",
						"name": "Saudi Arabia"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "العين",
							"ru": "Аль-Айн"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 3,
					"display": 3,
					"period1": 2,
					"period2": 1,
					"normaltime": 3
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"injuryTime1": 7,
					"injuryTime2": 5,
					"currentPeriodStartTimestamp": 1727205003
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727208210
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12453650,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727200800,
				"slug": "al-ain-al-ittihad",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "King's Cup",
					"slug": "kings-cup",
					"category": {
						"name": "Saudi Arabia",
						"slug": "saudi-arabia",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 310,
						"country": {
							"alpha2": "SA",
							"alpha3": "SAU",
							"name": "Saudi Arabia"
						},
						"flag": "saudi-arabia",
						"alpha2": "SA"
					},
					"uniqueTournament": {
						"name": "King's Cup",
						"slug": "kings-cup",
						"category": {
							"name": "Saudi Arabia",
							"slug": "saudi-arabia",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 310,
							"country": {
								"alpha2": "SA",
								"alpha3": "SAU",
								"name": "Saudi Arabia"
							},
							"flag": "saudi-arabia",
							"alpha2": "SA"
						},
						"userCount": 29591,
						"crowdsourcingEnabled": false,
						"hasPerformanceGraphFeature": false,
						"id": 2058,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 42021
				},
				"season": {
					"name": "Kings Cup 24/25",
					"year": "24/25",
					"editor": false,
					"id": 61803
				},
				"roundInfo": {
					"round": 6,
					"name": "Round of 32",
					"cupRoundType": 16
				},
				"customId": "nLnsZIhc",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "Al Kholood",
					"slug": "al-kholood",
					"shortName": "Al Kholood",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 9165,
					"nameCode": "AKH",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 269199,
					"country": {
						"alpha2": "SA",
						"alpha3": "SAU",
						"name": "Saudi Arabia"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "الخلود",
							"ru": "AL Khlood"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Al-Shabab",
					"slug": "al-shabab",
					"shortName": "Al-Shabab",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 51125,
					"nameCode": "SHA",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 34313,
					"country": {
						"alpha2": "SA",
						"alpha3": "SAU",
						"name": "Saudi Arabia"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "الشباب"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 1,
					"display": 1,
					"period1": 1,
					"period2": 0,
					"normaltime": 1
				},
				"awayScore": {
					"current": 3,
					"display": 3,
					"period1": 1,
					"period2": 2,
					"normaltime": 3
				},
				"time": {
					"injuryTime1": 4,
					"injuryTime2": 5,
					"currentPeriodStartTimestamp": 1727204977
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727208006
				},
				"hasGlobalHighlights": false,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12453649,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727200800,
				"slug": "al-kholood-al-shabab",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "King's Cup",
					"slug": "kings-cup",
					"category": {
						"name": "Saudi Arabia",
						"slug": "saudi-arabia",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 310,
						"country": {
							"alpha2": "SA",
							"alpha3": "SAU",
							"name": "Saudi Arabia"
						},
						"flag": "saudi-arabia",
						"alpha2": "SA"
					},
					"uniqueTournament": {
						"name": "King's Cup",
						"slug": "kings-cup",
						"category": {
							"name": "Saudi Arabia",
							"slug": "saudi-arabia",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 310,
							"country": {
								"alpha2": "SA",
								"alpha3": "SAU",
								"name": "Saudi Arabia"
							},
							"flag": "saudi-arabia",
							"alpha2": "SA"
						},
						"userCount": 29591,
						"crowdsourcingEnabled": false,
						"hasPerformanceGraphFeature": false,
						"id": 2058,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 42021
				},
				"season": {
					"name": "Kings Cup 24/25",
					"year": "24/25",
					"editor": false,
					"id": 61803
				},
				"roundInfo": {
					"round": 6,
					"name": "Round of 32",
					"cupRoundType": 16
				},
				"customId": "BHGbsGqid",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "Al-Najma SC",
					"slug": "al-najma",
					"shortName": "Al-Najma",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 3766,
					"nameCode": "NAJ",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 395831,
					"country": {
						"alpha2": "SA",
						"alpha3": "SAU",
						"name": "Saudi Arabia"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					}
				},
				"awayTeam": {
					"name": "Damac FC",
					"slug": "damac-fc",
					"shortName": "Damac",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 18814,
					"nameCode": "DAM",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 204126,
					"country": {
						"alpha2": "SA",
						"alpha3": "SAU",
						"name": "Saudi Arabia"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "ضمك‎"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 2,
					"display": 2,
					"period1": 0,
					"period2": 2,
					"normaltime": 2
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"injuryTime1": 5,
					"injuryTime2": 8,
					"currentPeriodStartTimestamp": 1727282656
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727285892
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12453646,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727278500,
				"slug": "al-najma-sc-damac-fc",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "King's Cup",
					"slug": "kings-cup",
					"category": {
						"name": "Saudi Arabia",
						"slug": "saudi-arabia",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 310,
						"country": {
							"alpha2": "SA",
							"alpha3": "SAU",
							"name": "Saudi Arabia"
						},
						"flag": "saudi-arabia",
						"alpha2": "SA"
					},
					"uniqueTournament": {
						"name": "King's Cup",
						"slug": "kings-cup",
						"category": {
							"name": "Saudi Arabia",
							"slug": "saudi-arabia",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 310,
							"country": {
								"alpha2": "SA",
								"alpha3": "SAU",
								"name": "Saudi Arabia"
							},
							"flag": "saudi-arabia",
							"alpha2": "SA"
						},
						"userCount": 29591,
						"crowdsourcingEnabled": false,
						"hasPerformanceGraphFeature": false,
						"id": 2058,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 42021
				},
				"season": {
					"name": "Kings Cup 24/25",
					"year": "24/25",
					"editor": false,
					"id": 61803
				},
				"roundInfo": {
					"round": 6,
					"name": "Round of 32",
					"cupRoundType": 16
				},
				"customId": "wvxsPlrb",
				"status": {
					"code": 110,
					"description": "AET",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "Abha",
					"slug": "abha",
					"shortName": "Abha",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 13429,
					"nameCode": "ABH",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 168090,
					"country": {
						"alpha2": "SA",
						"alpha3": "SAU",
						"name": "Saudi Arabia"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "أبها",
							"ru": "Абха"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Al-Taawoun",
					"slug": "al-taawoun",
					"shortName": "Al-Taawoun",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 30008,
					"nameCode": "ALT",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 56021,
					"country": {
						"alpha2": "SA",
						"alpha3": "SAU",
						"name": "Saudi Arabia"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "التعاون",
							"ru": "Аль-Таавун"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 2,
					"display": 2,
					"period1": 0,
					"period2": 1,
					"normaltime": 1,
					"extra1": 0,
					"extra2": 1,
					"overtime": 1
				},
				"awayScore": {
					"current": 3,
					"display": 3,
					"period1": 1,
					"period2": 0,
					"normaltime": 1,
					"extra1": 2,
					"extra2": 0,
					"overtime": 2
				},
				"time": {
					"injuryTime1": 4,
					"injuryTime2": 5,
					"injuryTime3": 1,
					"injuryTime4": 4,
					"currentPeriodStartTimestamp": 1727287912
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description"
					],
					"changeTimestamp": 1727289234
				},
				"hasGlobalHighlights": false,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12453667,
				"awayRedCards": 1,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727278800,
				"slug": "abha-al-taawoun",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "King's Cup",
					"slug": "kings-cup",
					"category": {
						"name": "Saudi Arabia",
						"slug": "saudi-arabia",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 310,
						"country": {
							"alpha2": "SA",
							"alpha3": "SAU",
							"name": "Saudi Arabia"
						},
						"flag": "saudi-arabia",
						"alpha2": "SA"
					},
					"uniqueTournament": {
						"name": "King's Cup",
						"slug": "kings-cup",
						"category": {
							"name": "Saudi Arabia",
							"slug": "saudi-arabia",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 310,
							"country": {
								"alpha2": "SA",
								"alpha3": "SAU",
								"name": "Saudi Arabia"
							},
							"flag": "saudi-arabia",
							"alpha2": "SA"
						},
						"userCount": 29591,
						"crowdsourcingEnabled": false,
						"hasPerformanceGraphFeature": false,
						"id": 2058,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 42021
				},
				"season": {
					"name": "Kings Cup 24/25",
					"year": "24/25",
					"editor": false,
					"id": 61803
				},
				"roundInfo": {
					"round": 6,
					"name": "Round of 32",
					"cupRoundType": 16
				},
				"customId": "DlrbsNlrb",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "Al-Safa FC",
					"slug": "al-safa-fc",
					"shortName": "Al-Safa",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 2850,
					"nameCode": "SAF",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 168078,
					"country": {
						"alpha2": "SA",
						"alpha3": "SAU",
						"name": "Saudi Arabia"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Аль Сафа"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Al Riyadh",
					"slug": "al-riyadh",
					"shortName": "Al Riyadh",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 15387,
					"nameCode": "RIY",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 168088,
					"country": {
						"alpha2": "SA",
						"alpha3": "SAU",
						"name": "Saudi Arabia"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "الرياض"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"awayScore": {
					"current": 3,
					"display": 3,
					"period1": 2,
					"period2": 1,
					"normaltime": 3
				},
				"time": {
					"injuryTime1": 5,
					"injuryTime2": 6,
					"currentPeriodStartTimestamp": 1727291138
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727294569
				},
				"hasGlobalHighlights": false,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12453644,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727287200,
				"slug": "al-riyadh-al-safa-fc",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "King's Cup",
					"slug": "kings-cup",
					"category": {
						"name": "Saudi Arabia",
						"slug": "saudi-arabia",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 310,
						"country": {
							"alpha2": "SA",
							"alpha3": "SAU",
							"name": "Saudi Arabia"
						},
						"flag": "saudi-arabia",
						"alpha2": "SA"
					},
					"uniqueTournament": {
						"name": "King's Cup",
						"slug": "kings-cup",
						"category": {
							"name": "Saudi Arabia",
							"slug": "saudi-arabia",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 310,
							"country": {
								"alpha2": "SA",
								"alpha3": "SAU",
								"name": "Saudi Arabia"
							},
							"flag": "saudi-arabia",
							"alpha2": "SA"
						},
						"userCount": 29591,
						"crowdsourcingEnabled": false,
						"hasPerformanceGraphFeature": false,
						"id": 2058,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 42021
				},
				"season": {
					"name": "Kings Cup 24/25",
					"year": "24/25",
					"editor": false,
					"id": 61803
				},
				"roundInfo": {
					"round": 6,
					"name": "Round of 32",
					"cupRoundType": 16
				},
				"customId": "Gvxsyggc",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "Jeddah Club",
					"slug": "jeddah-club",
					"shortName": "Jeddah Club",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 5029,
					"nameCode": "JED",
					"national": false,
					"type": 0,
					"id": 265323,
					"country": {
						"alpha2": "SA",
						"alpha3": "SAU",
						"name": "Saudi Arabia"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "جدة",
							"ru": "Джидда Клуб"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Al-Raed",
					"slug": "al-raed",
					"shortName": "Al-Raed",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 16884,
					"nameCode": "RAE",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 56031,
					"country": {
						"alpha2": "SA",
						"alpha3": "SAU",
						"name": "Saudi Arabia"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "الرائد",
							"ru": "ФК Аль Раэд"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"awayScore": {
					"current": 2,
					"display": 2,
					"period1": 2,
					"period2": 0,
					"normaltime": 2
				},
				"time": {
					"injuryTime1": 5,
					"injuryTime2": 6,
					"currentPeriodStartTimestamp": 1727291412
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727294548
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12453645,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727287200,
				"slug": "jeddah-club-al-raed",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Superettan",
					"slug": "superettan",
					"category": {
						"name": "Sweden",
						"slug": "sweden",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 9,
						"country": {
							"alpha2": "SE",
							"alpha3": "SWE",
							"name": "Sweden"
						},
						"flag": "sweden",
						"alpha2": "SE"
					},
					"uniqueTournament": {
						"name": "Superettan",
						"slug": "superettan",
						"category": {
							"name": "Sweden",
							"slug": "sweden",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 9,
							"country": {
								"alpha2": "SE",
								"alpha3": "SWE",
								"name": "Sweden"
							},
							"flag": "sweden",
							"alpha2": "SE"
						},
						"userCount": 8573,
						"id": 46,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 27
				},
				"season": {
					"name": "Superettan 2024",
					"year": "2024",
					"editor": false,
					"id": 57444
				},
				"roundInfo": {
					"round": 24
				},
				"customId": "DKsLL",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 3,
				"homeTeam": {
					"name": "Gefle IF",
					"slug": "gefle-if",
					"shortName": "Gefle",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 4359,
					"nameCode": "GEF",
					"national": false,
					"type": 0,
					"id": 1778,
					"country": {
						"alpha2": "SE",
						"alpha3": "SWE",
						"name": "Sweden"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "جيفل إيف",
							"ru": "Гефле ИФ"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Östersunds FK",
					"slug": "ostersunds-fk",
					"shortName": "Östersund",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 4846,
					"nameCode": "ÖFK",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 1836,
					"country": {
						"alpha2": "SE",
						"alpha3": "SWE",
						"name": "Sweden"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "أوسترسندز",
							"ru": "Эстерсунд ФК"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"currentPeriodStartTimestamp": 1727204114
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727204117
				},
				"hasGlobalHighlights": false,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12196933,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727197200,
				"slug": "ostersunds-fk-gefle-if",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Superettan",
					"slug": "superettan",
					"category": {
						"name": "Sweden",
						"slug": "sweden",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 9,
						"country": {
							"alpha2": "SE",
							"alpha3": "SWE",
							"name": "Sweden"
						},
						"flag": "sweden",
						"alpha2": "SE"
					},
					"uniqueTournament": {
						"name": "Superettan",
						"slug": "superettan",
						"category": {
							"name": "Sweden",
							"slug": "sweden",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 9,
							"country": {
								"alpha2": "SE",
								"alpha3": "SWE",
								"name": "Sweden"
							},
							"flag": "sweden",
							"alpha2": "SE"
						},
						"userCount": 8573,
						"id": 46,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 27
				},
				"season": {
					"name": "Superettan 2024",
					"year": "2024",
					"editor": false,
					"id": 57444
				},
				"roundInfo": {
					"round": 24
				},
				"customId": "xKsPM",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "Landskrona BoIS",
					"slug": "landskrona-bois",
					"shortName": "Landskrona",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 6984,
					"nameCode": "BOIS",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 1772,
					"country": {
						"alpha2": "SE",
						"alpha3": "SWE",
						"name": "Sweden"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "لاندسكرونا",
							"ru": "Ландскрона Боис"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Helsingborgs IF",
					"slug": "helsingborgs-if",
					"shortName": "Helsingborg",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 7399,
					"nameCode": "HIF",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 1890,
					"country": {
						"alpha2": "SE",
						"alpha3": "SWE",
						"name": "Sweden"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "هلسنبورغ",
							"ru": "ФК Хельсингборг"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"awayScore": {
					"current": 1,
					"display": 1,
					"period1": 1,
					"period2": 0,
					"normaltime": 1
				},
				"time": {
					"injuryTime1": 6,
					"injuryTime2": 7,
					"currentPeriodStartTimestamp": 1727204773
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727204776
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12196936,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727197200,
				"slug": "helsingborgs-if-landskrona-bois",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Superettan",
					"slug": "superettan",
					"category": {
						"name": "Sweden",
						"slug": "sweden",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 9,
						"country": {
							"alpha2": "SE",
							"alpha3": "SWE",
							"name": "Sweden"
						},
						"flag": "sweden",
						"alpha2": "SE"
					},
					"uniqueTournament": {
						"name": "Superettan",
						"slug": "superettan",
						"category": {
							"name": "Sweden",
							"slug": "sweden",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 9,
							"country": {
								"alpha2": "SE",
								"alpha3": "SWE",
								"name": "Sweden"
							},
							"flag": "sweden",
							"alpha2": "SE"
						},
						"userCount": 8573,
						"id": 46,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 27
				},
				"season": {
					"name": "Superettan 2024",
					"year": "2024",
					"editor": false,
					"id": 57444
				},
				"roundInfo": {
					"round": 24
				},
				"customId": "qKsLad",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 3,
				"homeTeam": {
					"name": "Utsiktens BK",
					"slug": "utsiktens-bk",
					"shortName": "Utsikten",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 4945,
					"nameCode": "UBK",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 7536,
					"country": {
						"alpha2": "SE",
						"alpha3": "SWE",
						"name": "Sweden"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "أوتسيكتينز بي كيه",
							"ru": "Утсиктенс БК"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Örgryte IS",
					"slug": "orgryte-is",
					"shortName": "Örgryte",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 5383,
					"nameCode": "ÖIS",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 1766,
					"country": {
						"alpha2": "SE",
						"alpha3": "SWE",
						"name": "Sweden"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Эргрюте"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"awayScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"time": {
					"injuryTime1": 3,
					"injuryTime2": 6,
					"currentPeriodStartTimestamp": 1727204296
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727204300
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12196938,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727197200,
				"slug": "utsiktens-bk-orgryte-is",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Challenge League",
					"slug": "challenge-league",
					"category": {
						"name": "Switzerland",
						"slug": "switzerland",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 25,
						"country": {
							"alpha2": "CH",
							"alpha3": "CHE",
							"name": "Switzerland"
						},
						"flag": "switzerland",
						"alpha2": "CH"
					},
					"uniqueTournament": {
						"name": "Challenge League",
						"slug": "challenge-league",
						"category": {
							"name": "Switzerland",
							"slug": "switzerland",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 25,
							"country": {
								"alpha2": "CH",
								"alpha3": "CHE",
								"name": "Switzerland"
							},
							"flag": "switzerland",
							"alpha2": "CH"
						},
						"userCount": 8435,
						"id": 216,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 1061
				},
				"season": {
					"name": "Challenge League 24/25",
					"year": "24/25",
					"editor": false,
					"id": 61670
				},
				"roundInfo": {
					"round": 8
				},
				"customId": "jZsmdo",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "AC Bellinzona",
					"slug": "ac-bellinzona",
					"shortName": "Bellinzona",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 3852,
					"nameCode": "ACB",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 2459,
					"country": {
						"alpha2": "CH",
						"alpha3": "CHE",
						"name": "Switzerland"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "أك بيلينزونا",
							"ru": "Беллинцона"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "FC Stade-Lausanne-Ouchy",
					"slug": "fc-stade-lausanne-ouchy",
					"shortName": "Stade Ls Ouchy",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 8129,
					"nameCode": "SLO",
					"national": false,
					"type": 0,
					"id": 35162,
					"country": {
						"alpha2": "CH",
						"alpha3": "CHE",
						"name": "Switzerland"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "ФК Стэйд Учи"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 2,
					"display": 2,
					"period1": 1,
					"period2": 1,
					"normaltime": 2
				},
				"awayScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"time": {
					"injuryTime1": 2,
					"injuryTime2": 6,
					"currentPeriodStartTimestamp": 1727208574
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727208577
				},
				"hasGlobalHighlights": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12442115,
				"homeRedCards": 1,
				"awayRedCards": 1,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727201700,
				"slug": "fc-stade-lausanne-ouchy-ac-bellinzona",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Challenge League",
					"slug": "challenge-league",
					"category": {
						"name": "Switzerland",
						"slug": "switzerland",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 25,
						"country": {
							"alpha2": "CH",
							"alpha3": "CHE",
							"name": "Switzerland"
						},
						"flag": "switzerland",
						"alpha2": "CH"
					},
					"uniqueTournament": {
						"name": "Challenge League",
						"slug": "challenge-league",
						"category": {
							"name": "Switzerland",
							"slug": "switzerland",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 25,
							"country": {
								"alpha2": "CH",
								"alpha3": "CHE",
								"name": "Switzerland"
							},
							"flag": "switzerland",
							"alpha2": "CH"
						},
						"userCount": 8435,
						"id": 216,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 1061
				},
				"season": {
					"name": "Challenge League 24/25",
					"year": "24/25",
					"editor": false,
					"id": 61670
				},
				"roundInfo": {
					"round": 8
				},
				"customId": "nZsXZ",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "Etoile Carouge FC",
					"slug": "etoile-carouge-fc",
					"shortName": "Etoile Carouge FC",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 2540,
					"nameCode": "ECA",
					"national": false,
					"type": 0,
					"id": 2497,
					"country": {
						"alpha2": "CH",
						"alpha3": "CHE",
						"name": "Switzerland"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "إتويل كاروج",
							"ru": "Этойл Каруж"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "FC Vaduz",
					"slug": "fc-vaduz",
					"shortName": "Vaduz",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 8190,
					"nameCode": "VAD",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 2463,
					"country": {
						"alpha2": "LI",
						"alpha3": "LIE",
						"name": "Liechtenstein"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "إف سي فادوز",
							"ru": "ФК Вадуц"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 1,
					"display": 1,
					"period1": 1,
					"period2": 0,
					"normaltime": 1
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"injuryTime2": 3,
					"currentPeriodStartTimestamp": 1727208275
				},
				"changes": {
					"changes": [
						"time.currentPeriodStart",
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime"
					],
					"changeTimestamp": 1727208280
				},
				"hasGlobalHighlights": true,
				"hasEventPlayerStatistics": true,
				"hasEventPlayerHeatMap": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12442116,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727201700,
				"slug": "etoile-carouge-fc-fc-vaduz",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Ligue 1",
					"slug": "ligue-1",
					"category": {
						"name": "Tunisia",
						"slug": "tunisia",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 378,
						"country": {
							"alpha2": "TN",
							"alpha3": "TUN",
							"name": "Tunisia"
						},
						"flag": "tunisia",
						"alpha2": "TN"
					},
					"uniqueTournament": {
						"name": "Tunisian Ligue Professionnelle 1",
						"slug": "ligue-1",
						"category": {
							"name": "Tunisia",
							"slug": "tunisia",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 378,
							"country": {
								"alpha2": "TN",
								"alpha3": "TUN",
								"name": "Tunisia"
							},
							"flag": "tunisia",
							"alpha2": "TN"
						},
						"userCount": 14085,
						"id": 984,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 4295
				},
				"season": {
					"name": "Ligue 1 24/25",
					"year": "24/25",
					"editor": false,
					"id": 65503
				},
				"roundInfo": {
					"round": 2
				},
				"customId": "DRysXJjc",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "AS Soliman",
					"slug": "as-soliman",
					"shortName": "AS Soliman",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 1675,
					"nameCode": "SOL",
					"national": false,
					"type": 0,
					"id": 274247,
					"country": {
						"alpha2": "TN",
						"alpha3": "TUN",
						"name": "Tunisia"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "مستقبل سليمان"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Espérance Tunis",
					"slug": "esperance-tunis",
					"shortName": "Espérance",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 88492,
					"nameCode": "EST",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 59628,
					"country": {
						"alpha2": "TN",
						"alpha3": "TUN",
						"name": "Tunisia"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Эсперанс Спортив"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 1,
					"display": 1,
					"period1": 1,
					"period2": 0,
					"normaltime": 1
				},
				"awayScore": {
					"current": 2,
					"display": 2,
					"period1": 1,
					"period2": 1,
					"normaltime": 2
				},
				"time": {
					"injuryTime1": 1,
					"injuryTime2": 4,
					"currentPeriodStartTimestamp": 1727281479
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727281483
				},
				"hasGlobalHighlights": false,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12799452,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727274600,
				"slug": "as-soliman-esperance-tunis",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Ligue 1",
					"slug": "ligue-1",
					"category": {
						"name": "Tunisia",
						"slug": "tunisia",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 378,
						"country": {
							"alpha2": "TN",
							"alpha3": "TUN",
							"name": "Tunisia"
						},
						"flag": "tunisia",
						"alpha2": "TN"
					},
					"uniqueTournament": {
						"name": "Tunisian Ligue Professionnelle 1",
						"slug": "ligue-1",
						"category": {
							"name": "Tunisia",
							"slug": "tunisia",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 378,
							"country": {
								"alpha2": "TN",
								"alpha3": "TUN",
								"name": "Tunisia"
							},
							"flag": "tunisia",
							"alpha2": "TN"
						},
						"userCount": 14085,
						"id": 984,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 4295
				},
				"season": {
					"name": "Ligue 1 24/25",
					"year": "24/25",
					"editor": false,
					"id": 65503
				},
				"roundInfo": {
					"round": 2
				},
				"customId": "nOrszCjb",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 1,
				"homeTeam": {
					"name": "CS Sfaxien",
					"slug": "cs-sfaxien",
					"shortName": "Sfaxien",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 12037,
					"nameCode": "CSS",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 44463,
					"country": {
						"alpha2": "TN",
						"alpha3": "TUN",
						"name": "Tunisia"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "النادي الرياضي الصفاقسي",
							"ru": "Клуб Спортиф Сфаксьен"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "US Ben Guerdane",
					"slug": "us-ben-guerdane",
					"shortName": "Ben Guerdane",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 2960,
					"nameCode": "BGU",
					"national": false,
					"type": 0,
					"id": 148874,
					"country": {
						"alpha2": "TN",
						"alpha3": "TUN",
						"name": "Tunisia"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "إتحاد بن قردان"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"awayScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"time": {
					"currentPeriodStartTimestamp": 1727281942
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727281945
				},
				"hasGlobalHighlights": false,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12799450,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727274600,
				"slug": "us-ben-guerdane-cs-sfaxien",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "US Open Cup",
					"slug": "us-open-cup",
					"category": {
						"name": "USA",
						"slug": "usa",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 26,
						"country": {
							"alpha2": "US",
							"alpha3": "USA",
							"name": "USA"
						},
						"flag": "usa",
						"alpha2": "US"
					},
					"uniqueTournament": {
						"name": "US Open Cup",
						"slug": "us-open-cup",
						"category": {
							"name": "USA",
							"slug": "usa",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 26,
							"country": {
								"alpha2": "US",
								"alpha3": "USA",
								"name": "USA"
							},
							"flag": "usa",
							"alpha2": "US"
						},
						"userCount": 9451,
						"crowdsourcingEnabled": false,
						"hasPerformanceGraphFeature": false,
						"id": 495,
						"hasEventPlayerStatistics": true,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 6814
				},
				"season": {
					"name": "US Open Cup 2024",
					"year": "2024",
					"editor": false,
					"id": 58896
				},
				"roundInfo": {
					"round": 29,
					"name": "Final",
					"cupRoundType": 1
				},
				"customId": "jabsaTjc",
				"status": {
					"code": 0,
					"description": "Not started",
					"type": "notstarted"
				},
				"homeTeam": {
					"name": "Los Angeles FC",
					"slug": "los-angeles-fc",
					"shortName": "Los Angeles",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 49125,
					"nameCode": "LAN",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 274650,
					"country": {
						"alpha2": "US",
						"alpha3": "USA",
						"name": "USA"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "نادي لوس أنجلوس",
							"ru": "Лос-Анджелес ФК"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Sporting Kansas City",
					"slug": "sporting-kansas-city",
					"shortName": "Kansas City",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 13370,
					"nameCode": "SKC",
					"national": false,
					"type": 0,
					"id": 2509,
					"country": {
						"alpha2": "US",
						"alpha3": "USA",
						"name": "USA"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "سپورتينغ كانساس سيتي",
							"ru": "Спортинг Канзас Сити"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {},
				"awayScore": {},
				"time": {},
				"changes": {
					"changeTimestamp": 0
				},
				"hasGlobalHighlights": false,
				"detailId": 1,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12758692,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727317800,
				"slug": "los-angeles-fc-sporting-kansas-city",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Cymru Premier",
					"slug": "cymru-premier",
					"category": {
						"name": "Wales",
						"slug": "wales",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 131,
						"country": {
							"alpha2": "WA",
							"alpha3": "WAL",
							"name": "Wales"
						},
						"flag": "wales",
						"alpha2": "WA"
					},
					"uniqueTournament": {
						"name": "Cymru Premier",
						"slug": "cymru-premier",
						"category": {
							"name": "Wales",
							"slug": "wales",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 131,
							"country": {
								"alpha2": "WA",
								"alpha3": "WAL",
								"name": "Wales"
							},
							"flag": "wales",
							"alpha2": "WA"
						},
						"userCount": 7390,
						"id": 254,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 904
				},
				"season": {
					"name": "Cymru Premier 24/25",
					"year": "24/25",
					"editor": false,
					"id": 61811
				},
				"roundInfo": {
					"round": 9
				},
				"customId": "mYbstYb",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 3,
				"homeTeam": {
					"name": "Connah's Quay Nomads",
					"slug": "connahs-quay-nomads",
					"shortName": "Connah's Quay",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 12956,
					"nameCode": "CQN",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 4912,
					"country": {
						"alpha2": "WA",
						"alpha3": "WAL",
						"name": "Wales"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "نادي كوناهس كواي",
							"ru": "Коннах Куэй Номадс"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Newtown AFC",
					"slug": "newtown-afc",
					"shortName": "Newtown",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 4976,
					"nameCode": "NEW",
					"national": false,
					"type": 0,
					"id": 4918,
					"country": {
						"alpha2": "WA",
						"alpha3": "WAL",
						"name": "Wales"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "أيه إف سي نيو تاون",
							"ru": "ФК Ньютаун"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 1,
					"display": 1,
					"period1": 1,
					"period2": 0,
					"normaltime": 1
				},
				"awayScore": {
					"current": 1,
					"display": 1,
					"period1": 1,
					"period2": 0,
					"normaltime": 1
				},
				"time": {
					"injuryTime1": 1,
					"injuryTime2": 8,
					"currentPeriodStartTimestamp": 1727210340
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727210344
				},
				"hasGlobalHighlights": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12454721,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727203500,
				"slug": "newtown-afc-connahs-quay-nomads",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Cymru Premier",
					"slug": "cymru-premier",
					"category": {
						"name": "Wales",
						"slug": "wales",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 131,
						"country": {
							"alpha2": "WA",
							"alpha3": "WAL",
							"name": "Wales"
						},
						"flag": "wales",
						"alpha2": "WA"
					},
					"uniqueTournament": {
						"name": "Cymru Premier",
						"slug": "cymru-premier",
						"category": {
							"name": "Wales",
							"slug": "wales",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 131,
							"country": {
								"alpha2": "WA",
								"alpha3": "WAL",
								"name": "Wales"
							},
							"flag": "wales",
							"alpha2": "WA"
						},
						"userCount": 7390,
						"id": 254,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 904
				},
				"season": {
					"name": "Cymru Premier 24/25",
					"year": "24/25",
					"editor": false,
					"id": 61811
				},
				"roundInfo": {
					"round": 9
				},
				"customId": "pYbsLdo",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 3,
				"homeTeam": {
					"name": "Haverfordwest County AFC",
					"slug": "haverfordwest-county-afc",
					"shortName": "Haverfordwest",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 3107,
					"nameCode": "HFW",
					"national": false,
					"type": 0,
					"id": 4915,
					"country": {
						"alpha2": "WA",
						"alpha3": "WAL",
						"name": "Wales"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "هافرفوردويست كاونتي",
							"ru": "ФК Хаверфордвест"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Barry Town",
					"slug": "barry-town",
					"shortName": "Barry",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 4399,
					"nameCode": "BAT",
					"national": false,
					"type": 0,
					"id": 35186,
					"country": {
						"alpha2": "WA",
						"alpha3": "WAL",
						"name": "Wales"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "Barry Town United FC",
							"ru": "Барри Таун"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 1,
					"display": 1,
					"period1": 1,
					"period2": 0,
					"normaltime": 1
				},
				"awayScore": {
					"current": 1,
					"display": 1,
					"period1": 1,
					"period2": 0,
					"normaltime": 1
				},
				"time": {
					"currentPeriodStartTimestamp": 1727207280
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type"
					],
					"changeTimestamp": 1727210330
				},
				"hasGlobalHighlights": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12454722,
				"awayRedCards": 1,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727203500,
				"slug": "barry-town-haverfordwest-county-afc",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Cymru Premier",
					"slug": "cymru-premier",
					"category": {
						"name": "Wales",
						"slug": "wales",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 131,
						"country": {
							"alpha2": "WA",
							"alpha3": "WAL",
							"name": "Wales"
						},
						"flag": "wales",
						"alpha2": "WA"
					},
					"uniqueTournament": {
						"name": "Cymru Premier",
						"slug": "cymru-premier",
						"category": {
							"name": "Wales",
							"slug": "wales",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 131,
							"country": {
								"alpha2": "WA",
								"alpha3": "WAL",
								"name": "Wales"
							},
							"flag": "wales",
							"alpha2": "WA"
						},
						"userCount": 7390,
						"id": 254,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 904
				},
				"season": {
					"name": "Cymru Premier 24/25",
					"year": "24/25",
					"editor": false,
					"id": 61811
				},
				"roundInfo": {
					"round": 9
				},
				"customId": "KdWsJacb",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "Penybont",
					"slug": "penybont",
					"shortName": "Penybont",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 5603,
					"nameCode": "PEN",
					"national": false,
					"type": 0,
					"id": 115185,
					"country": {
						"alpha2": "WA",
						"alpha3": "WAL",
						"name": "Wales"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					}
				},
				"awayTeam": {
					"name": "Briton Ferry Llansawel AFC",
					"slug": "briton-ferry-llansawel-afc",
					"shortName": "Briton Ferry",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 4887,
					"nameCode": "BFE",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 130034,
					"country": {
						"alpha2": "WA",
						"alpha3": "WAL",
						"name": "Wales"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "بريتون فيري",
							"ru": "Бритон Ферри"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 0,
					"display": 0,
					"period1": 0,
					"period2": 0,
					"normaltime": 0
				},
				"awayScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"time": {
					"injuryTime1": 2,
					"injuryTime2": 4,
					"currentPeriodStartTimestamp": 1727210363
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727210365
				},
				"hasGlobalHighlights": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12454723,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727203500,
				"slug": "briton-ferry-llansawel-afc-penybont",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Cymru Premier",
					"slug": "cymru-premier",
					"category": {
						"name": "Wales",
						"slug": "wales",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 131,
						"country": {
							"alpha2": "WA",
							"alpha3": "WAL",
							"name": "Wales"
						},
						"flag": "wales",
						"alpha2": "WA"
					},
					"uniqueTournament": {
						"name": "Cymru Premier",
						"slug": "cymru-premier",
						"category": {
							"name": "Wales",
							"slug": "wales",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 131,
							"country": {
								"alpha2": "WA",
								"alpha3": "WAL",
								"name": "Wales"
							},
							"flag": "wales",
							"alpha2": "WA"
						},
						"userCount": 7390,
						"id": 254,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 904
				},
				"season": {
					"name": "Cymru Premier 24/25",
					"year": "24/25",
					"editor": false,
					"id": 61811
				},
				"roundInfo": {
					"round": 9
				},
				"customId": "wYbsfAo",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "The New Saints",
					"slug": "the-new-saints",
					"shortName": "TNS",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 53403,
					"nameCode": "TNS",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 4921,
					"country": {
						"alpha2": "WA",
						"alpha3": "WAL",
						"name": "Wales"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "نيو سينتس",
							"ru": "Нью-Сейнтс"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Bala Town",
					"slug": "bala-town",
					"shortName": "Bala Town",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 9145,
					"nameCode": "BAT",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 36255,
					"country": {
						"alpha2": "WA",
						"alpha3": "WAL",
						"name": "Wales"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "نادي بالا تاون",
							"ru": "Бала Таун"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 2,
					"display": 2,
					"period1": 1
				},
				"awayScore": {
					"current": 3,
					"display": 3,
					"period1": 1
				},
				"time": {
					"injuryTime1": 2,
					"injuryTime2": 6,
					"currentPeriodStartTimestamp": 1727210517
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727210521
				},
				"hasGlobalHighlights": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12454724,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727203500,
				"slug": "bala-town-the-new-saints",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Cymru Premier",
					"slug": "cymru-premier",
					"category": {
						"name": "Wales",
						"slug": "wales",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 131,
						"country": {
							"alpha2": "WA",
							"alpha3": "WAL",
							"name": "Wales"
						},
						"flag": "wales",
						"alpha2": "WA"
					},
					"uniqueTournament": {
						"name": "Cymru Premier",
						"slug": "cymru-premier",
						"category": {
							"name": "Wales",
							"slug": "wales",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 131,
							"country": {
								"alpha2": "WA",
								"alpha3": "WAL",
								"name": "Wales"
							},
							"flag": "wales",
							"alpha2": "WA"
						},
						"userCount": 7390,
						"id": 254,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 904
				},
				"season": {
					"name": "Cymru Premier 24/25",
					"year": "24/25",
					"editor": false,
					"id": 61811
				},
				"roundInfo": {
					"round": 9
				},
				"customId": "fYbsgRqb",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "Aberystwyth Town",
					"slug": "aberystwyth-town",
					"shortName": "Aberystwyth",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 3006,
					"nameCode": "ABE",
					"national": false,
					"type": 0,
					"id": 4905,
					"country": {
						"alpha2": "WA",
						"alpha3": "WAL",
						"name": "Wales"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "Aberystwyth Town FC",
							"ru": "Аберистуит Таун"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Cardiff Met FC",
					"slug": "cardiff-met-fc",
					"shortName": "Cardiff Met",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 3341,
					"nameCode": "CMU",
					"national": false,
					"type": 0,
					"id": 167106,
					"country": {
						"alpha2": "WA",
						"alpha3": "WAL",
						"name": "Wales"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "Cardiff Metropolitan University FC",
							"ru": "Кардифф Метрополитан Юнивёрсити"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 1,
					"display": 1,
					"period1": 0,
					"period2": 1,
					"normaltime": 1
				},
				"awayScore": {
					"current": 2,
					"display": 2,
					"period1": 1,
					"period2": 1,
					"normaltime": 2
				},
				"time": {
					"injuryTime1": 1,
					"injuryTime2": 4,
					"currentPeriodStartTimestamp": 1727211149
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727211151
				},
				"hasGlobalHighlights": true,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12454725,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727204400,
				"slug": "cardiff-met-fc-aberystwyth-town",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			},
			{
				"tournament": {
					"name": "Cymru Premier",
					"slug": "cymru-premier",
					"category": {
						"name": "Wales",
						"slug": "wales",
						"sport": {
							"name": "Football",
							"slug": "football",
							"id": 1
						},
						"id": 131,
						"country": {
							"alpha2": "WA",
							"alpha3": "WAL",
							"name": "Wales"
						},
						"flag": "wales",
						"alpha2": "WA"
					},
					"uniqueTournament": {
						"name": "Cymru Premier",
						"slug": "cymru-premier",
						"category": {
							"name": "Wales",
							"slug": "wales",
							"sport": {
								"name": "Football",
								"slug": "football",
								"id": 1
							},
							"id": 131,
							"country": {
								"alpha2": "WA",
								"alpha3": "WAL",
								"name": "Wales"
							},
							"flag": "wales",
							"alpha2": "WA"
						},
						"userCount": 7390,
						"id": 254,
						"hasEventPlayerStatistics": false,
						"displayInverseHomeAwayTeams": false
					},
					"priority": 0,
					"id": 904
				},
				"season": {
					"name": "Cymru Premier 24/25",
					"year": "24/25",
					"editor": false,
					"id": 61811
				},
				"roundInfo": {
					"round": 9
				},
				"customId": "jYbsPQo",
				"status": {
					"code": 100,
					"description": "Ended",
					"type": "finished"
				},
				"winnerCode": 2,
				"homeTeam": {
					"name": "Flint Town United",
					"slug": "flint-town-united",
					"shortName": "Flint Town Utd",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 2874,
					"nameCode": "FTU",
					"disabled": false,
					"national": false,
					"type": 0,
					"id": 37090,
					"country": {
						"alpha2": "WA",
						"alpha3": "WAL",
						"name": "Wales"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ar": "فلينت تاون يونايتد إف سي",
							"ru": "Флинт Таун Юнайтед"
						},
						"shortNameTranslation": {}
					}
				},
				"awayTeam": {
					"name": "Caernarfon Town",
					"slug": "caernarfon-town",
					"shortName": "Caernarfon",
					"sport": {
						"name": "Football",
						"slug": "football",
						"id": 1
					},
					"userCount": 4243,
					"nameCode": "CAT",
					"national": false,
					"type": 0,
					"id": 4909,
					"country": {
						"alpha2": "WA",
						"alpha3": "WAL",
						"name": "Wales"
					},
					"subTeams": [],
					"teamColors": {
						"primary": "#374df5",
						"secondary": "#374df5",
						"text": "#ffffff"
					},
					"fieldTranslations": {
						"nameTranslation": {
							"ru": "Карнарвон Таун"
						},
						"shortNameTranslation": {}
					}
				},
				"homeScore": {
					"current": 1,
					"display": 1,
					"period1": 1,
					"period2": 0,
					"normaltime": 1
				},
				"awayScore": {
					"current": 2,
					"display": 2,
					"period1": 1,
					"period2": 1,
					"normaltime": 2
				},
				"time": {
					"injuryTime1": 2,
					"injuryTime2": 5,
					"currentPeriodStartTimestamp": 1727296722
				},
				"changes": {
					"changes": [
						"status.code",
						"status.description",
						"status.type",
						"homeScore.period2",
						"homeScore.normaltime",
						"awayScore.period2",
						"awayScore.normaltime",
						"time.currentPeriodStart"
					],
					"changeTimestamp": 1727296732
				},
				"hasGlobalHighlights": false,
				"crowdsourcingDataDisplayEnabled": false,
				"id": 12454726,
				"crowdsourcingEnabled": false,
				"startTimestamp": 1727289900,
				"slug": "flint-town-united-caernarfon-town",
				"finalResultOnly": false,
				"feedLocked": false,
				"isEditor": false
			}
		]
	}
}

export class MongoTournamentRepository implements TournamentRepositoryPort {
  async getTournament(tournament: string): Promise<any> {
    try {
      console.log('tournament', tournament);

      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const day = String(today.getDate()).padStart(2, '0');
      const formattedDate = `${year}-${month}-${day}`;

      const options = {
        method: 'GET',
        url: `${process.env.URL_RAPID_API}/football-scheduled-events`,
        params: { date: formattedDate },
        headers: {
          'X-RapidAPI-Key': process.env.X_RAPIDAPI_KEY,
          'X-RapidAPI-Host': process.env.X_RAPIDAPI_HOST
        },
        timeout: 10000 
      };

      const response = await axios.request(options);

      if (response.data?.status === 'success') {
        const events = response.data?.response?.events || [];

        await Promise.all(events.map(async (event: any) => {
          if (event.status?.type === 'finished') {
            const homeTeamSlug = event?.homeTeam?.slug;
            const awayTeamSlug = event?.awayTeam?.slug;
						const twoDaysInMs = 2 * 24 * 60 * 60 * 1000;
						const formattedDateObj = new Date(`${formattedDate}T00:00:00`);

            const homeTeam = await teamService.getTeamBySlug(homeTeamSlug);
						if (homeTeam && homeTeam.updateAt && (formattedDateObj.getTime() - new Date(homeTeam.updateAt).getTime() > twoDaysInMs) || homeTeam && !homeTeam?.updateAt) {
							let win = false;
              let draw = false;
              let defeat = false;
              let goalsPro = 0;
              let goalsOwn = 0;
							if (event?.homeScore?.current > event?.awayScore?.current) win = true;
							if (event?.homeScore?.current < event?.awayScore?.current) defeat = true;
							if (event?.homeScore?.current === event?.awayScore?.current) draw = true;
							goalsPro = event?.homeScore?.current;
							goalsOwn = event?.awayScore?.current;

							const newSeason = await homeTeam?.season?.map((season: any) => {
                if(season?.status === 'in progress'){
                  let newWins = season?.wins;
                  let newDraws = season?.draws;
                  let newDefeat = season?.defeat;
                  let newPoints = season?.points;
                  const proGoals = season?.proGoals + goalsPro;
                  const onwGoals = season?.onwGoals + goalsOwn;

                  if(win) {
                    newWins = newWins + 1;
                    newPoints = newPoints + 3;
                  };
                  if(draw) {
                    newDraws = newDraws + 1;
                    newPoints = newPoints + 1;
                  };
                  if(defeat) newDefeat = newDefeat + 1;
                  return {
                    ...season?._doc,
                    wins: newWins,
                    draws: newDraws,
                    defeat: newDefeat,
                    points: newPoints,
                    proGoals,
                    onwGoals
                  }
                }
                return season
              });

              const updateItemData = {
                ...homeTeam,
                updateAt: formattedDate,
                season: newSeason
              };

              await teamService.update(updateItemData);
						}

						const awayTeam = await teamService.getTeamBySlug(awayTeamSlug);

						if (awayTeam && awayTeam.updateAt && (formattedDateObj.getTime() - new Date(awayTeam.updateAt).getTime() > twoDaysInMs) || awayTeam && !awayTeam?.updateAt) {
							let win = false;
              let draw = false;
              let defeat = false;
              let goalsPro = 0;
              let goalsOwn = 0;
							if (event?.homeScore?.current < event?.awayScore?.current) win = true;
							if (event?.homeScore?.current > event?.awayScore?.current) defeat = true;
							if (event?.homeScore?.current === event?.awayScore?.current) draw = true;
							goalsOwn = event?.homeScore?.current;
							goalsPro = event?.awayScore?.current;

							const newSeason = await awayTeam?.season?.map((season: any) => {
                if(season?.status === 'in progress'){
                  let newWins = season?.wins;
                  let newDraws = season?.draws;
                  let newDefeat = season?.defeat;
                  let newPoints = season?.points;
                  const proGoals = season?.proGoals + goalsPro;
                  const onwGoals = season?.onwGoals + goalsOwn;

                  if(win) {
                    newWins = newWins + 1;
                    newPoints = newPoints + 3;
                  };
                  if(draw) {
                    newDraws = newDraws + 1;
                    newPoints = newPoints + 1;
                  };
                  if(defeat) newDefeat = newDefeat + 1;
                  return {
                    ...season?._doc,
                    wins: newWins,
                    draws: newDraws,
                    defeat: newDefeat,
                    points: newPoints,
                    proGoals,
                    onwGoals
                  }
                }
                return season
              });

              const updateItemData = {
                ...awayTeam,
                updateAt: formattedDate,
                season: newSeason
              };

              await teamService.update(updateItemData);
						}
              return true
          }
          return null; 
        }));

        const tables = await teamService.getTables();

        return tables
      } else {
        throw new Error('Failed to fetch tournament data');
      }
    } catch (error) {
      console.error('Error fetching tournament data:', error);
      throw new Error('Unable to fetch tournament data');
    }
  }
}
