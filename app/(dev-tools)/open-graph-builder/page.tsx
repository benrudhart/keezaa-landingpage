import { Instructions } from "./components/instructions/instructions";
import { OpenGraphPreview } from "./components/open_graph_preview/open_graph_preview";
import styles from "./page.module.css";

export default function OpenGraphBuilderPage() {
  return (
    <div className={styles.ogBuilder}>
      <h2 className={styles.sectionTitle}>Preview</h2>
      <div className={`ogBuilderPreview ${styles.preview}`}>
        {/*
					Customize parameters of this component:
					* Keep the title short to make the overall image uncluttered
					* Use the screenshot that showcases the most eye-catching part of
						the app in order to grab user's attention
					* Adjust the screenshot crop if needed
				*/}
        <OpenGraphPreview
          title="Keezaa"
          subtitle="Kieser-Training® App"
          iconSrc="/keezaa_app_icon.png"
          screenshotSrc="/og-screenshot.png"
          bezel="iPhone Air Space Black"
          bezelCrop={{ edge: "bottom", croppedRatio: 0.18 }}
          theme="dark"
        />
      </div>

      <h2 className={styles.sectionTitle}>Instructions</h2>
      <div className={styles.instructions}>
        <Instructions />
      </div>
    </div>
  );
}
