
const filterexpand = document.getElementById('filterexpand')
const filterbar = document.getElementById('filterbar');
filterexpand.addEventListener("click" , () => {
    filterbar.classList.toggle("showfilters");
})


const pop1 = document.getElementById('pop1');
const rock1 = document.getElementById('rock1');
const rock2 = document.getElementById('rock2');
const soul1 = document.getElementById('soul1');
const soul2 = document.getElementById('soul2');
const soul3 = document.getElementById('soul3');
const indie1 = document.getElementById('indie1');
const alternative1 = document.getElementById('alternative1');
const alternative2 = document.getElementById('alternative2');
const soundtrack1 = document.getElementById('soundtrack1');
const resetfilter = document.getElementById('resetfilter')


const poptoggle = document.getElementById('poptoggle');
const rocktoggle = document.getElementById('rocktoggle');
const soultoggle = document.getElementById('soultoggle');
const indietoggle = document.getElementById('indietoggle');
const alternativetoggle = document.getElementById('alternativetoggle');
const soundtracktoggle = document.getElementById('soundtracktoggle');


resetfilter.addEventListener("click" , () => {
    rock1.classList.add('rock');
    rock2.classList.add('rock');
    soul1.classList.add('soul');
    soul2.classList.add('soul');
    soul3.classList.add('soul');
    indie1.classList.add('indie');
    alternative1.classList.add('alternative');
    alternative2.classList.add('alternative');
    soundtrack1.classList.add('soundtrack');
    pop1.classList.add('pop');
})

poptoggle.addEventListener("click" , () => {
    rock1.classList.add('rock');
    rock2.classList.add('rock');
    soul1.classList.add('soul');
    soul2.classList.add('soul');
    soul3.classList.add('soul');
    indie1.classList.add('indie');
    alternative1.classList.add('alternative');
    alternative2.classList.add('alternative');
    soundtrack1.classList.add('soundtrack');
    pop1.classList.add('pop');

    rock1.classList.toggle('rock');
    rock2.classList.toggle('rock');
    soul1.classList.toggle('soul');
    soul2.classList.toggle('soul');
    soul3.classList.toggle('soul');
    indie1.classList.toggle('indie');
    alternative1.classList.toggle('alternative');
    alternative2.classList.toggle('alternative');
    soundtrack1.classList.toggle('soundtrack');
    pop1.classList.add('pop');
})

rocktoggle.addEventListener("click" , () => {
    rock1.classList.add('rock');
    rock2.classList.add('rock');
    soul1.classList.add('soul');
    soul2.classList.add('soul');
    soul3.classList.add('soul');
    indie1.classList.add('indie');
    alternative1.classList.add('alternative');
    alternative2.classList.add('alternative');
    soundtrack1.classList.add('soundtrack');
    pop1.classList.add('pop');

    rock1.classList.add('rock');
    rock2.classList.add('rock');
    soul1.classList.toggle('soul');
    soul2.classList.toggle('soul');
    soul3.classList.toggle('soul');
    indie1.classList.toggle('indie');
    alternative1.classList.toggle('alternative');
    alternative2.classList.toggle('alternative');
    soundtrack1.classList.toggle('soundtrack');
    pop1.classList.toggle('pop');
})

soultoggle.addEventListener("click" , () => {
    rock1.classList.add('rock');
    rock2.classList.add('rock');
    soul1.classList.add('soul');
    soul2.classList.add('soul');
    soul3.classList.add('soul');
    indie1.classList.add('indie');
    alternative1.classList.add('alternative');
    alternative2.classList.add('alternative');
    soundtrack1.classList.add('soundtrack');
    pop1.classList.add('pop');

    rock1.classList.toggle('rock');
    rock2.classList.toggle('rock');
    soul1.classList.add('soul');
    soul2.classList.add('soul');
    soul3.classList.add('soul');
    indie1.classList.toggle('indie');
    alternative1.classList.toggle('alternative');
    alternative2.classList.toggle('alternative');
    soundtrack1.classList.toggle('soundtrack');
    pop1.classList.toggle('pop');
})

indietoggle.addEventListener("click" , () => {
    rock1.classList.add('rock');
    rock2.classList.add('rock');
    soul1.classList.add('soul');
    soul2.classList.add('soul');
    soul3.classList.add('soul');
    indie1.classList.add('indie');
    alternative1.classList.add('alternative');
    alternative2.classList.add('alternative');
    soundtrack1.classList.add('soundtrack');
    pop1.classList.add('pop');

    rock1.classList.toggle('rock');
    rock2.classList.toggle('rock');
    soul1.classList.toggle('soul');
    soul2.classList.toggle('soul');
    soul3.classList.toggle('soul');
    indie1.classList.add('indie');
    alternative1.classList.toggle('alternative');
    alternative2.classList.toggle('alternative');
    soundtrack1.classList.toggle('soundtrack');
    pop1.classList.toggle('pop');
})

alternativetoggle.addEventListener("click" , () => {
    rock1.classList.add('rock');
    rock2.classList.add('rock');
    soul1.classList.add('soul');
    soul2.classList.add('soul');
    soul3.classList.add('soul');
    indie1.classList.add('indie');
    alternative1.classList.add('alternative');
    alternative2.classList.add('alternative');
    soundtrack1.classList.add('soundtrack');
    pop1.classList.add('pop');

    rock1.classList.toggle('rock');
    rock2.classList.toggle('rock');
    soul1.classList.toggle('soul');
    soul2.classList.toggle('soul');
    soul3.classList.toggle('soul');
    indie1.classList.toggle('indie');
    alternative1.classList.add('alternative');
    alternative2.classList.add('alternative');
    soundtrack1.classList.toggle('soundtrack');
    pop1.classList.toggle('pop');
})

soundtracktoggle.addEventListener("click" , () => {
    rock1.classList.add('rock');
    rock2.classList.add('rock');
    soul1.classList.add('soul');
    soul2.classList.add('soul');
    soul3.classList.add('soul');
    indie1.classList.add('indie');
    alternative1.classList.add('alternative');
    alternative2.classList.add('alternative');
    soundtrack1.classList.add('soundtrack');
    pop1.classList.add('pop');

    rock1.classList.toggle('rock');
    rock2.classList.toggle('rock');
    soul1.classList.toggle('soul');
    soul2.classList.toggle('soul');
    soul3.classList.toggle('soul');
    indie1.classList.toggle('indie');
    alternative1.classList.toggle('alternative');
    alternative2.classList.toggle('alternative');
    soundtrack1.classList.add('soundtrack');
    pop1.classList.toggle('pop');
})

