setInterval(() => {
    d=new Date();
    h=d.getHours();
    m=d.getMinutes();
    s=d.getSeconds();
    hrotation=30*h+m/2;
    mrotation=6*m;
    srotation=6*s;
    hour.style.transform=`rotate(${hrotation}deg)`;
    minute.style.transform=`rotate(${mrotation}deg)`;
    second.style.transform=`rotate(${srotation}deg)`;

    lhour.style.transform=`rotate(${hrotation-165}deg)`;
    lminute.style.transform=`rotate(${mrotation-180}deg)`;
    lsecond.style.transform=`rotate(${srotation}deg)`;
 
    phour.style.transform=`rotate(${hrotation-135}deg)`;
    pminute.style.transform=`rotate(${mrotation-180}deg)`;
    psecond.style.transform=`rotate(${srotation}deg)`;

    
    bhour.style.transform=`rotate(${hrotation+45}deg)`;
    bminute.style.transform=`rotate(${mrotation-180}deg)`;
    bsecond.style.transform=`rotate(${srotation}deg)`;

    nhour.style.transform=`rotate(${hrotation+45}deg)`;
    nminute.style.transform=`rotate(${mrotation-180}deg)`;
    nsecond.style.transform=`rotate(${srotation}deg)`;

    shour.style.transform=`rotate(${hrotation-195}deg)`;
    sminute.style.transform=`rotate(${mrotation-180}deg)`;
    ssecond.style.transform=`rotate(${srotation}deg)`;

    behour.style.transform=`rotate(${hrotation-135}deg)`;
    beminute.style.transform=`rotate(${mrotation-180}deg)`;
    besecond.style.transform=`rotate(${srotation}deg)`;

    mhour.style.transform=`rotate(${hrotation-75}deg)`;
    mminute.style.transform=`rotate(${mrotation-180}deg)`;
    msecond.style.transform=`rotate(${srotation}deg)`;
    
}, 100);