
var vlSpec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    data: { name: 'table' },
    width: 800,
    heigh:300,
    mark: {type:'line',strokeWidth:3},
    encoding: {
      x: { field: 'year', type: 'quantitative',title:"Year", scale: { zero: false } ,axis:{format:'d',"grid":false}},
      y: { field: 'GDP_per_capita_USD', type: 'quantitative',title:"GDP per Capita" },
      color: { field: 'Country', type: 'nominal',scale:{range:['#66c2a5',
        '#fc8d62',
        '#444e86',
        '#e78ac3',
        '#a6d854',
        '#ffd92f'] }},
      tooltip: [
        { field: 'year', type: 'quantitative', title: 'Year' },
        { field: 'GDP_per_capita_USD', type: 'quantitative', title: 'GDP',format:'.3s' },
        { field: 'Country', type: 'nominal', title: 'Country' }
      ],
      shape:{}
      }
      ,
      config: {padding: 50}
  };
  
  document.addEventListener('DOMContentLoaded', function () {
    
    vegaEmbed('#chart', vlSpec,).then(function (res) {
        var data = [
            { 
                Country: 'Australia', 
                year: 1990, 
                GDP_per_capita_USD: 18243.47142 
            },
            { 
                Country: 'China', 
                year: 1990, 
                GDP_per_capita_USD: 317.884673 
            },
            { 
                Country: 'United Kingdom', 
                year: 1990, 
                GDP_per_capita_USD: 19095.467 
            },
            { 
                Country: 'Luxembourg', 
                year: 1990, 
                GDP_per_capita_USD: 33465.47821 
            },
            { 
                Country: 'Singapore', 
                year: 1990, 
                GDP_per_capita_USD: 11861.75616 
            },
            { 
                Country: 'United States', 
                year: 1990, 
                GDP_per_capita_USD: 23888.60001 
            },
            { 
                Country: 'Australia', 
                year: 1991, 
                GDP_per_capita_USD: 18855.762 
            },
            { 
                Country: 'China', 
                year: 1991, 
                GDP_per_capita_USD: 333.1421454 
            },
            { 
                Country: 'United Kingdom', 
                year: 1991, 
                GDP_per_capita_USD: 19900.72665 
            },
            { 
                Country: 'Luxembourg', 
                year: 1991, 
                GDP_per_capita_USD: 35747.3378 
            },
            { 
                Country: 'Singapore', 
                year: 1991, 
                GDP_per_capita_USD: 14502.37999 
            },
            { 
                Country: 'United States', 
                year: 1991, 
                GDP_per_capita_USD: 24342.2589 
            },
            { 
                Country: 'Australia', 
                year: 1992, 
                GDP_per_capita_USD: 18604.18827 
            },
            { 
                Country: 'China', 
                year: 1992, 
                GDP_per_capita_USD: 366.4606923 
            },
            { 
                Country: 'United Kingdom', 
                year: 1992, 
                GDP_per_capita_USD: 20487.17079 
            },
            { 
                Country: 'Luxembourg', 
                year: 1992, 
                GDP_per_capita_USD: 39570.86157 
            },
            { 
                Country: 'Singapore', 
                year: 1992, 
                GDP_per_capita_USD: 16135.91365 
            },
            { 
                Country: 'United States', 
                year: 1992, 
                GDP_per_capita_USD: 25418.99078 
            },
            { 
                Country: 'Australia', 
                year: 1993, 
                GDP_per_capita_USD: 17667.1871 
            },
            { 
                Country: 'China', 
                year: 1993, 
                GDP_per_capita_USD: 377.3898395 
            },
            { 
                Country: 'United Kingdom', 
                year: 1993, 
                GDP_per_capita_USD: 18389.01957 
            },
            { 
                Country: 'Luxembourg', 
                year: 1993, 
                GDP_per_capita_USD: 40066.72425 
            },
            { 
                Country: 'Singapore', 
                year: 1993, 
                GDP_per_capita_USD: 18290.02824 
            },
            { 
                Country: 'United States', 
                year: 1993, 
                GDP_per_capita_USD: 26387.29373 
            },
            { 
                Country: 'Australia', 
                year: 1994, 
                GDP_per_capita_USD: 18079.38018 
            },
            { 
                Country: 'China', 
                year: 1994, 
                GDP_per_capita_USD: 473.4922787 
            },
            { 
                Country: 'United Kingdom', 
                year: 1994, 
                GDP_per_capita_USD: 19709.2381 
            },
            { 
                Country: 'Luxembourg', 
                year: 1994, 
                GDP_per_capita_USD: 43933.23544 
            },
            { 
                Country: 'Singapore', 
                year: 1994, 
                GDP_per_capita_USD: 21553.0309 
            },
            { 
                Country: 'United States', 
                year: 1994, 
                GDP_per_capita_USD: 27694.85342 
            },
            { 
                Country: 'Australia', 
                year: 1995, 
                GDP_per_capita_USD: 20358.33336 
            },
            { 
                Country: 'China', 
                year: 1995, 
                GDP_per_capita_USD: 609.6566792 
            },
            { 
                Country: 'United Kingdom', 
                year: 1995, 
                GDP_per_capita_USD: 23206.56856 
            },
            { 
                Country: 'Luxembourg', 
                year: 1995, 
                GDP_per_capita_USD: 51032.34964 
            },
            { 
                Country: 'Singapore', 
                year: 1995, 
                GDP_per_capita_USD: 24914.41126 
            },
            { 
                Country: 'United States', 
                year: 1995, 
                GDP_per_capita_USD: 28690.8757 
            },
            { 
                Country: 'Australia', 
                year: 1996, 
                GDP_per_capita_USD: 21904.29412 
            },
            { 
                Country: 'China', 
                year: 1996, 
                GDP_per_capita_USD: 709.4137551 
            },
            { 
                Country: 'United Kingdom', 
                year: 1996, 
                GDP_per_capita_USD: 24438.53117 
            },
            { 
                Country: 'Luxembourg', 
                year: 1996, 
                GDP_per_capita_USD: 50444.35912 
            },
            { 
                Country: 'Singapore', 
                year: 1996, 
                GDP_per_capita_USD: 26233.6289 
            },
            { 
                Country: 'United States', 
                year: 1996, 
                GDP_per_capita_USD: 29967.71272 
            },
            { 
                Country: 'Australia', 
                year: 1997, 
                GDP_per_capita_USD: 23509.42347 
            },
            { 
                Country: 'China', 
                year: 1997, 
                GDP_per_capita_USD: 781.7441643 
            },
            { 
                Country: 'United Kingdom', 
                year: 1997, 
                GDP_per_capita_USD: 26742.98485 
            },
            { 
                Country: 'Luxembourg', 
                year: 1997, 
                GDP_per_capita_USD: 46641.64088 
            },
            { 
                Country: 'Singapore', 
                year: 1997, 
                GDP_per_capita_USD: 26375.97195 
            },
            { 
                Country: 'United States', 
                year: 1997, 
                GDP_per_capita_USD: 31459.13898 
            },
            { 
                Country: 'Australia', 
                year: 1998, 
                GDP_per_capita_USD: 21345.97099 
            },
            { 
                Country: 'China', 
                year: 1998, 
                GDP_per_capita_USD: 828.5804793 
            },
            { 
                Country: 'United Kingdom', 
                year: 1998, 
                GDP_per_capita_USD: 28269.32251 
            },
            { 
                Country: 'Luxembourg', 
                year: 1998, 
                GDP_per_capita_USD: 47445.38108 
            },
            { 
                Country: 'Singapore', 
                year: 1998, 
                GDP_per_capita_USD: 21829.29987 
            },
            { 
                Country: 'United States', 
                year: 1998, 
                GDP_per_capita_USD: 32853.67695 
            },
            { 
                Country: 'Australia', 
                year: 1999, 
                GDP_per_capita_USD: 20558.9604 
            },
            { 
                Country: 'China', 
                year: 1999, 
                GDP_per_capita_USD: 873.2870617 
            },
            { 
                Country: 'United Kingdom', 
                year: 1999, 
                GDP_per_capita_USD: 28726.85721 
            },
            { 
                Country: 'Luxembourg', 
                year: 1999, 
                GDP_per_capita_USD: 50872.44927 
            },
            { 
                Country: 'Singapore', 
                year: 1999, 
                GDP_per_capita_USD: 21796.08444 
            },
            { 
                Country: 'United States', 
                year: 1999, 
                GDP_per_capita_USD: 34515.39023 
            },
            { 
                Country: 'Australia', 
                year: 2000, 
                GDP_per_capita_USD: 21697.70848 
            },
            { 
                Country: 'China', 
                year: 2000, 
                GDP_per_capita_USD: 959.3724836 
            },
            { 
                Country: 'United Kingdom', 
                year: 2000, 
                GDP_per_capita_USD: 28223.06757 
            },
            { 
                Country: 'Luxembourg', 
                year: 2000, 
                GDP_per_capita_USD: 48659.59888 
            },
            { 
                Country: 'Singapore', 
                year: 2000, 
                GDP_per_capita_USD: 23852.32703 
            },
            { 
                Country: 'United States', 
                year: 2000, 
                GDP_per_capita_USD: 36329.95607 
            },
            { 
                Country: 'Australia', 
                year: 2001, 
                GDP_per_capita_USD: 19527.32358 
            },
            { 
                Country: 'China', 
                year: 2001, 
                GDP_per_capita_USD: 1053.108243 
            },
            { 
                Country: 'United Kingdom', 
                year: 2001, 
                GDP_per_capita_USD: 27806.44882 
            },
            { 
                Country: 'Luxembourg', 
                year: 2001, 
                GDP_per_capita_USD: 48440.14202 
            },
            { 
                Country: 'Singapore', 
                year: 2001, 
                GDP_per_capita_USD: 21700.02005 
            },
            { 
                Country: 'United States', 
                year: 2001, 
                GDP_per_capita_USD: 37133.62311 
            },
            { 
                Country: 'Australia', 
                year: 2002, 
                GDP_per_capita_USD: 20117.78889 
            },
            { 
                Country: 'China', 
                year: 2002, 
                GDP_per_capita_USD: 1148.50829 
            },
            { 
                Country: 'United Kingdom', 
                year: 2002, 
                GDP_per_capita_USD: 30049.89632 
            },
            { 
                Country: 'Luxembourg', 
                year: 2002, 
                GDP_per_capita_USD: 53005.73392 
            },
            { 
                Country: 'Singapore', 
                year: 2002, 
                GDP_per_capita_USD: 22159.68886 
            },
            { 
                Country: 'United States', 
                year: 2002, 
                GDP_per_capita_USD: 37997.75966 
            },
            { 
                Country: 'Australia', 
                year: 2003, 
                GDP_per_capita_USD: 23492.40517 
            },
            { 
                Country: 'China', 
                year: 2003, 
                GDP_per_capita_USD: 1288.643252 
            },
            { 
                Country: 'United Kingdom', 
                year: 2003, 
                GDP_per_capita_USD: 34487.46757 
            },
            { 
                Country: 'Luxembourg', 
                year: 2003, 
                GDP_per_capita_USD: 65689.32145 
            },
            { 
                Country: 'Singapore', 
                year: 2003, 
                GDP_per_capita_USD: 23730.15245 
            },
            { 
                Country: 'United States', 
                year: 2003, 
                GDP_per_capita_USD: 39490.27496 
            },
            { 
                Country: 'Australia', 
                year: 2004, 
                GDP_per_capita_USD: 30513.94174 
            },
            { 
                Country: 'China', 
                year: 2004, 
                GDP_per_capita_USD: 1508.668098 
            },
            { 
                Country: 'United Kingdom', 
                year: 2004, 
                GDP_per_capita_USD: 40371.71083 
            },
            { 
                Country: 'Luxembourg', 
                year: 2004, 
                GDP_per_capita_USD: 76544.91709 
            },
            { 
                Country: 'Singapore', 
                year: 2004, 
                GDP_per_capita_USD: 27608.53737 
            },
            { 
                Country: 'United States', 
                year: 2004, 
                GDP_per_capita_USD: 41724.63163 
            },
            { 
                Country: 'Australia', 
                year: 2005, 
                GDP_per_capita_USD: 34080.9999 
            },
            { 
                Country: 'China', 
                year: 2005, 
                GDP_per_capita_USD: 1753.417829 
            },
            { 
                Country: 'United Kingdom', 
                year: 2005, 
                GDP_per_capita_USD: 42132.09072 
            },
            { 
                Country: 'Luxembourg', 
                year: 2005, 
                GDP_per_capita_USD: 80988.13762 
            },
            { 
                Country: 'Singapore', 
                year: 2005, 
                GDP_per_capita_USD: 29961.26328 
            },
            { 
                Country: 'United States', 
                year: 2005, 
                GDP_per_capita_USD: 44123.40707 
            },
            { 
                Country: 'Australia', 
                year: 2006, 
                GDP_per_capita_USD: 36117.48798 
            },
            { 
                Country: 'China', 
                year: 2006, 
                GDP_per_capita_USD: 2099.229435 
            },
            { 
                Country: 'United Kingdom', 
                year: 2006, 
                GDP_per_capita_USD: 44654.09692 
            },
            { 
                Country: 'Luxembourg', 
                year: 2006, 
                GDP_per_capita_USD: 90788.80049 
            },
            { 
                Country: 'Singapore', 
                year: 2006, 
                GDP_per_capita_USD: 33769.15416 
            },
            { 
                Country: 'United States', 
                year: 2006, 
                GDP_per_capita_USD: 46302.00088 
            },
            { 
                Country: 'Australia', 
                year: 2007, 
                GDP_per_capita_USD: 41001.14298 
            },
            { 
                Country: 'China', 
                year: 2007, 
                GDP_per_capita_USD: 2693.970063 
            },
            { 
                Country: 'United Kingdom', 
                year: 2007, 
                GDP_per_capita_USD: 50653.25691 
            },
            { 
                Country: 'Luxembourg', 
                year: 2007, 
                GDP_per_capita_USD: 107475.3203 
            },
            { 
                Country: 'Singapore', 
                year: 2007, 
                GDP_per_capita_USD: 39432.93835 
            },
            { 
                Country: 'United States', 
                year: 2007, 
                GDP_per_capita_USD: 48050.22378 
            },
            { 
                Country: 'Australia', 
                year: 2008, 
                GDP_per_capita_USD: 49654.9106 
            },
            { 
                Country: 'China', 
                year: 2008, 
                GDP_per_capita_USD: 3468.304602 
            },
            { 
                Country: 'United Kingdom', 
                year: 2008, 
                GDP_per_capita_USD: 47549.34863 
            },
            { 
                Country: 'Luxembourg', 
                year: 2008, 
                GDP_per_capita_USD: 120422.1379 
            },
            { 
                Country: 'Singapore', 
                year: 2008, 
                GDP_per_capita_USD: 40007.46926 
            },
            { 
                Country: 'United States', 
                year: 2008, 
                GDP_per_capita_USD: 48570.04598 
            },
            { 
                Country: 'Australia', 
                year: 2009, 
                GDP_per_capita_USD: 42783.32257 
            },
            { 
                Country: 'China', 
                year: 2009, 
                GDP_per_capita_USD: 3832.236432 
            },
            { 
                Country: 'United Kingdom', 
                year: 2009, 
                GDP_per_capita_USD: 38952.21103 
            },
            { 
                Country: 'Luxembourg', 
                year: 2009, 
                GDP_per_capita_USD: 109419.747 
            },
            { 
                Country: 'Singapore', 
                year: 2009, 
                GDP_per_capita_USD: 38927.20688 
            },
            { 
                Country: 'United States', 
                year: 2009, 
                GDP_per_capita_USD: 47194.94335 
            },
            { 
                Country: 'Australia', 
                year: 2010, 
                GDP_per_capita_USD: 52087.97229 
            },
            { 
                Country: 'China', 
                year: 2010, 
                GDP_per_capita_USD: 4550.453108 
            },
            { 
                Country: 'United Kingdom', 
                year: 2010, 
                GDP_per_capita_USD: 39688.61497 
            },
            { 
                Country: 'Luxembourg', 
                year: 2010, 
                GDP_per_capita_USD: 110885.9914 
            },
            { 
                Country: 'Singapore', 
                year: 2010, 
                GDP_per_capita_USD: 47236.96023 
            },
            { 
                Country: 'United States', 
                year: 2010, 
                GDP_per_capita_USD: 48650.64313 
            },
            { 
                Country: 'Australia', 
                year: 2011, 
                GDP_per_capita_USD: 62574.1457 
            },
            { 
                Country: 'China', 
                year: 2011, 
                GDP_per_capita_USD: 5614.352135 
            },
            { 
                Country: 'United Kingdom', 
                year: 2011, 
                GDP_per_capita_USD: 42284.88449 
            },
            { 
                Country: 'Luxembourg', 
                year: 2011, 
                GDP_per_capita_USD: 119025.0572 
            },
            { 
                Country: 'Singapore', 
                year: 2011, 
                GDP_per_capita_USD: 53890.42873 
            },
            { 
                Country: 'United States', 
                year: 2011, 
                GDP_per_capita_USD: 50065.9665 
            },
            { 
                Country: 'Australia', 
                year: 2012, 
                GDP_per_capita_USD: 68027.84171 
            },
            { 
                Country: 'China', 
                year: 2012, 
                GDP_per_capita_USD: 6300.615118 
            },
            { 
                Country: 'United Kingdom', 
                year: 2012, 
                GDP_per_capita_USD: 42686.80005 
            },
            { 
                Country: 'Luxembourg', 
                year: 2012, 
                GDP_per_capita_USD: 112584.6763 
            },
            { 
                Country: 'Singapore', 
                year: 2012, 
                GDP_per_capita_USD: 55546.48854 
            },
            { 
                Country: 'United States', 
                year: 2012, 
                GDP_per_capita_USD: 51784.41857 
            },
            { 
                Country: 'Australia', 
                year: 2013, 
                GDP_per_capita_USD: 68156.62792 
            },
            { 
                Country: 'China', 
                year: 2013, 
                GDP_per_capita_USD: 7020.338485 
            },
            { 
                Country: 'United Kingdom', 
                year: 2013, 
                GDP_per_capita_USD: 43713.81412 
            },
            { 
                Country: 'Luxembourg', 
                year: 2013, 
                GDP_per_capita_USD: 120000.1407 
            },
            { 
                Country: 'Singapore', 
                year: 2013, 
                GDP_per_capita_USD: 56967.42579 
            },
            { 
                Country: 'United States', 
                year: 2013, 
                GDP_per_capita_USD: 53291.12769 
            },
            { 
                Country: 'Australia', 
                year: 2014, 
                GDP_per_capita_USD: 62511.69059 
            },
            { 
                Country: 'China', 
                year: 2014, 
                GDP_per_capita_USD: 7636.116601 
            },
            { 
                Country: 'United Kingdom', 
                year: 2014, 
                GDP_per_capita_USD: 47787.2413 
            },
            { 
                Country: 'Luxembourg', 
                year: 2014, 
                GDP_per_capita_USD: 123678.7021 
            },
            { 
                Country: 'Singapore', 
                year: 2014, 
                GDP_per_capita_USD: 57562.53079 
            },
            { 
                Country: 'United States', 
                year: 2014, 
                GDP_per_capita_USD: 55123.84979 
            },
            { 
                Country: 'Australia', 
                year: 2015, 
                GDP_per_capita_USD: 56707.02208 
            },
            { 
                Country: 'China', 
                year: 2015, 
                GDP_per_capita_USD: 8016.431435 
            },
            { 
                Country: 'United Kingdom', 
                year: 2015, 
                GDP_per_capita_USD: 45404.56777 
            },
            { 
                Country: 'Luxembourg', 
                year: 2015, 
                GDP_per_capita_USD: 105462.0126 
            },
            { 
                Country: 'Singapore', 
                year: 2015, 
                GDP_per_capita_USD: 55646.61875 
            },
            { 
                Country: 'United States', 
                year: 2015, 
                GDP_per_capita_USD: 56762.72945 
            },
            { 
                Country: 'Australia', 
                year: 2016, 
                GDP_per_capita_USD: 49881.76371 
            },
            { 
                Country: 'China', 
                year: 2016, 
                GDP_per_capita_USD: 8094.363367 
            },
            { 
                Country: 'United Kingdom', 
                year: 2016, 
                GDP_per_capita_USD: 42110.1976 
            },
            { 
                Country: 'Luxembourg', 
                year: 2016, 
                GDP_per_capita_USD: 106806.4282 
            },
            { 
                Country: 'Singapore', 
                year: 2016, 
                GDP_per_capita_USD: 54705.42874 
            },
            { 
                Country: 'United States', 
                year: 2016, 
                GDP_per_capita_USD: 57904.20286 
            },
            { 
                Country: 'Australia', 
                year: 2017, 
                GDP_per_capita_USD: 53483.87549 
            },
            { 
                Country: 'China', 
                year: 2017, 
                GDP_per_capita_USD: 8884.587318 
            },
            { 
                Country: 'United Kingdom', 
                year: 2017, 
                GDP_per_capita_USD: 42303.9474 
            },
            { 
                Country: 'Luxembourg', 
                year: 2017, 
                GDP_per_capita_USD: 113196.2613 
            },
            { 
                Country: 'Singapore', 
                year: 2017, 
                GDP_per_capita_USD: 55669.28456 
            },
            { 
                Country: 'United States', 
                year: 2017, 
                GDP_per_capita_USD: 60387.73165 
            },
            { 
                Country: 'Australia', 
                year: 2018, 
                GDP_per_capita_USD: 56727.40073 
            },
            { 
                Country: 'China', 
                year: 2018, 
                GDP_per_capita_USD: 9976.512631 
            },
            { 
                Country: 'United Kingdom', 
                year: 2018, 
                GDP_per_capita_USD: 39876.35283 
            },
            { 
                Country: 'Luxembourg', 
                year: 2018, 
                GDP_per_capita_USD: 115700.2166 
            },
            { 
                Country: 'Singapore', 
                year: 2018, 
                GDP_per_capita_USD: 57375.80103 
            },
            { 
                Country: 'United States', 
                year: 2018, 
                GDP_per_capita_USD: 62794.58553 
            },
            { 
                Country: 'Australia', 
                year: 2019, 
                GDP_per_capita_USD: 54039.34747 
            },
            { 
                Country: 'China', 
                year: 2019, 
                GDP_per_capita_USD: 10261.67248 
            },
            { 
                Country: 'United Kingdom', 
                year: 2019, 
                GDP_per_capita_USD: 40232.86604 
            },
            { 
                Country: 'Luxembourg', 
                year: 2019, 
                GDP_per_capita_USD: 117921.2132 
            },
            { 
                Country: 'Singapore', 
                year: 2019, 
                GDP_per_capita_USD: 58996.50629 
            },
            { 
                Country: 'United States', 
                year: 2019, 
                GDP_per_capita_USD: 65297.51747 
            },
            { 
                Country: 'Australia', 
                year: 2020, 
                GDP_per_capita_USD: 48767.39865 
            },
            { 
                Country: 'China', 
                year: 2020, 
                GDP_per_capita_USD: 10750.96876 
            },
            { 
                Country: 'United Kingdom', 
                year: 2020, 
                GDP_per_capita_USD: 38413.49064 
            },
            { 
                Country: 'Luxembourg', 
                year: 2020, 
                GDP_per_capita_USD: 115700.2166 
            },
            { 
                Country: 'Singapore', 
                year: 2020, 
                GDP_per_capita_USD: 57218.47022 
            },
            { 
                Country: 'United States', 
                year: 2020, 
                GDP_per_capita_USD: 63127.74117 
            },
            { 
                Country: 'Australia', 
                year: 2021, 
                GDP_per_capita_USD: 51795.08581 
            },
            { 
                Country: 'China', 
                year: 2021, 
                GDP_per_capita_USD: 11423.72059 
            },
            { 
                Country: 'United Kingdom', 
                year: 2021, 
                GDP_per_capita_USD: 39247.02485 
            },
            { 
                Country: 'Luxembourg', 
                year: 2021, 
                GDP_per_capita_USD: 117921.2132 
            },
            { 
                Country: 'Singapore', 
                year: 2021, 
                GDP_per_capita_USD: 57242.79119 
            },
            { 
                Country: 'United States', 
                year: 2021, 
                GDP_per_capita_USD: 64894.16985 
            }
        ];
        
  
      var dataIndex = 0;
  
      function updateChart() {
        if (dataIndex < data.length) {
          res.view.insert('table', [data[dataIndex]]).runAsync().then(function () {
            dataIndex++;
            if (dataIndex === data.length) {
              // After showing all data points, reset the chart and dataIndex
              res.view.remove('table', (d) => true).runAsync().then(function () {

                //next update
                setTimeout(updateChart, 500);
                dataIndex = 0;
              });
            } else {
              // Continue updating the chart
              setTimeout(updateChart, 200);
            }
          });
        }
      }

      function noUpdate() {
        if (dataIndex < data.length) {
          res.view.insert('table', [data[dataIndex]]).runAsync().then(function () {
            dataIndex++;
            
              // Continue updating the chart
              setTimeout(noUpdate, 0);
            
          });
        }
      }
      updateChart();


      var update = true;
      document.getElementById("toggle").onclick=function(){
        update = !update;
        if(update){
            res.view.remove('table', (d) => true).runAsync().then(function () {

                //next update
                setTimeout(updateChart, 500);
                dataIndex = 0;
              });
        }
        else{
            
            noUpdate();
        }
      }
    });
  });
  






  