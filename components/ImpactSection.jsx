import styles from '@/styles/ImpactSection.module.scss';
‎
‎export default function ImpactSection() {
return (
<section className={styles.impact}>
<h2> How We're Making an <span>Impact</span> </h2>
<div className={styles.cards}> 
<div className={styles.card}>
<h3>Physical Meetups & Virtual Workshops</h3>
<p>We’ve successfully hosted events to educate and inspire.</p> 
</div> 
<div className={styles.card}>
<h3>University & Tech Community Programs</h3>
<p>Bringing Web3 education to campuses and hubs across Africa.</p>
</div>
<div className={styles.card}>
<h3>Job Placement Support</h3>
<p>Helping skilled Africans secure roles in the fast-growing Blockchain industry.</p> 
</div> 
</div>
</section> );
}
