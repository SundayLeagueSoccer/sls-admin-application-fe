import InputForm from "./Components/InputForm";
import PageHeader from "./Components/PageHeader";
import PlayersList from "./Components/PlayersList";
import StatisticsList from "./Components/StatisticsList";
import styles from "./UpdateStatisticsPage.module.scss";

const UpdateStatisticsPage = () => {
  return (
    <>
      <main className={styles.UpdateStatisticsPage}>
        <PageHeader />
        <div>
          <PlayersList />
          <InputForm />
          <StatisticsList />
        </div>
      </main>
    </>
  );
};

export default UpdateStatisticsPage;
