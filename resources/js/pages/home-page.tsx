import React, { useEffect, useState } from 'react';
import styles from '../../css/home-page.module.css';

const HomePage: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>('');

    const handleScroll = () => {
        const sections = document.querySelectorAll('section');
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 60) {
                currentSection = section.getAttribute('id') || '';
            }
        });
        setActiveSection(currentSection);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={styles.container}>
            <aside className={styles.sidebar}>
                <ul>
                    <li className={activeSection === 'education' ? styles.active : ''} onClick={() => scrollToSection('education')}>教育經歷</li>
                    <li className={activeSection === 'experience' ? styles.active : ''} onClick={() => scrollToSection('experience')}>工作經歷</li>
                    <li className={activeSection === 'contact' ? styles.active : ''} onClick={() => scrollToSection('contact')}>Contact</li>
                </ul>
            </aside>
            <div className={styles.content}>
                <header className={styles.header}>
                    <h1>徐嘉擇</h1>
                    <p>Software Engineer</p>
                </header>
                <section id="education" className={styles.section}>
                    <h2>教育經歷</h2>
                    <ul>
                        <li>
                            <h3>國立臺灣師範大學 機電工程學系學士班</h3>
                            <p>2015～2019</p>
                        </li>
                        <li>
                            <h3>國立臺灣師範大學 機電工程學系碩士班</h3>
                            <p>2019～2021</p>
                            <p>研究：利用人工智慧預測數值變化</p>
                            <p>技術：Python、AI、Keras、數據處理、資料視覺化、影像處理、爬蟲</p>
                        </li>
                    </ul>
                </section>
                <section id="experience" className={styles.section}>
                    <h2>工作經歷</h2>
                    <ul>
                        <li>
                            <h3>鼎堅航太股份有限公司｜軟體工程師</h3>
                            <p>2020/10～2024/03（逾三年）</p>
                            <p>主要負責專案：</p>
                            <p>臺南市政府地政局複丈外業拍照管理系統（以下簡稱複丈系統）</p>
                            <p>費時五個月開發完成地政複丈系統，並持續負責維護此項⽬。地政複丈系統上線後已處理 4,000多筆複丈案件、45,000多個界址點。</p>
                            <p>負責內容：</p>
                            <ul>
                                <li>與甲方討論所需功能、規劃複丈系統、設計資料庫</li>
                                <li>使用 Docker 建立開發環境</li>
                                <li>使用 Laravel 9、PostgreSQL 14、Apache2 做後端系統</li>
                                <li>使用 HTML、CSS、JS 、Google Map JavaScript API 做前端網頁</li>
                                <li>主動建議使用最新版本的 Laravel，與主管討論後，主管同意讓我自行研讀官方技術文件，並建立開發環境</li>
                                <li>自行研讀 Google Map JavaScript API 技術文件，使複丈系統即時於地圖繪製相關地籍資料</li>
                                <li>與 mobile 端工程師合作開發 API</li>
                                <li>撰寫Shell Script自動部署環境，並先在VM測試</li>
                                <li>於臺南市政府地政局之 Linux 電腦安裝系統環境，並使複丈系統上線</li>
                            </ul>
                            <p>系統功能：</p>
                            <ul>
                                <li>人員權限管理，各部門依職位分層管理</li>
                                <li>網頁上傳地籍資料，並顯示於地圖上</li>
                                <li>手機上傳界址點狀態及照片</li>
                                <li>主管審核案件功能</li>
                            </ul>
                            <p>其他負責專案：</p>
                            <ul>
                                <li>戰情中心：介接公司其他系統API，使公司相關業務的數據一目瞭然</li>
                                <li>管挖施工系統：上傳施工照片並自動產生相關文件，減少公司人工成本</li>
                                <li>北水GNSS資料分析：以 Python分析數據，將數據可視化，做成報告</li>
                                <li>GPS Filter API：以 Python Flask 架設輕量API，協助其他系統處理數據</li>
                            </ul>
                        </li>
                    </ul>
                </section>
                <section id="contact" className={styles.section}>
                    <h2>Contact</h2>
                    <p>Email: ra1997226@gmail.com</p>
                    <p>Phone: 0968857068</p>
                </section>
            </div>
        </div>
    );
};

export default HomePage;
