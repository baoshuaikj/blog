function quickSort(t,a){if(0==t.length)return[];for(var e=[],r=[],i=t[0],s=1;s<t.length;s++)t[s][a]>i[a]?e.push(t[s]):r.push(t[s]);return quickSort(e,a).concat(i,quickSort(r,a))}var fdatalist=JSON.parse(localStorage.getItem("fdatalist"));fdatalist&&fetch(fdatalist.apiurl).then((t=>t.json())).then((json=>{var statistical_data=json.statistical_data;localStorage.setItem("statisticalList",JSON.stringify(statistical_data));var article_data=eval(json.article_data),article_sortcreated=quickSort(article_data,"time");localStorage.setItem("createdList",JSON.stringify(article_sortcreated));var article_sortupdated=quickSort(article_data,"updated");localStorage.setItem("updatedList",JSON.stringify(article_sortupdated))}));