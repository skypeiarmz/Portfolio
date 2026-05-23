using System.Collections;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.SocialPlatforms.Impl;
using UnityEngine.UI;
using TMPro;

public class GameManager : MonoBehaviour
{
    public int playerScore = 0;
    public int enemyScore = 0;
    public int scoreToWin = 10;

    //Audio
    public AudioClip scoreSound;
    public AudioClip winSound;
    public AudioClip loseSound;
    private AudioSource audioPlayer;

    public TMP_Text playerScoreText;
    public TMP_Text enemyScoreText;
    public TMP_Text winText;

    public string nextLevelName = "";
    void Start()
    {
        audioPlayer = gameObject.AddComponent<AudioSource>();
        UpdateScoreDisplay();
        if (winText != null) 
        winText.text = "";
    }

    public void PlayerScored()
    {//Called when the player scores a point
        playerScore++;
        if (scoreSound != null) audioPlayer.PlayOneShot(scoreSound);
        UpdateScoreDisplay();
        CheckWin();

    }

    public void EnemyScored()
    {//Called when the enemy scores a point
        enemyScore++;
        if (scoreSound != null) audioPlayer.PlayOneShot(scoreSound);
        UpdateScoreDisplay();
        CheckWin();
    }

    void UpdateScoreDisplay()
    {//Updates the UI and displays current scores
        if (playerScoreText != null)
            playerScoreText.text = "" + playerScore;
        if (enemyScoreText != null)
            enemyScoreText.text = "" + enemyScore;
    }

    void CheckWin()
    {//Check who reached win condition
        if (playerScore >= scoreToWin) //Players wins
        {
            //Freezes all game elements
            FreezeGame();

            if (winSound != null) audioPlayer.PlayOneShot(winSound);
            if (winText != null) winText.text = "DIMENSION SECURED! Advancing to next level....";
            Time.timeScale = 0; //Pauses physics
            StartCoroutine(LoadNextLevel());
        }
        else if (enemyScore >= scoreToWin) //Enemy wins
        {
            if (loseSound != null) audioPlayer.PlayOneShot(loseSound);
            if (winText != null) winText.text = "DIMENSION BREACHED! Press R to restart.";
            Time.timeScale = 0; //Pauses physics
        }

        IEnumerator LoadNextLevel()
        {
            //Waits 2 seconds 
            yield return new WaitForSecondsRealtime(2f);

            //Checks if there's another level
            if (!string.IsNullOrEmpty(nextLevelName))
            {
                //There is a next level = loads the scene
                Time.timeScale = 1;
                SceneManager.LoadScene(nextLevelName);
            }
            
            else
            {
                //Final level, show victory if player wins
                if (winText != null)
                {
                    winText.text = "VICTORY! YOU SAVED THE DIMENSIONS! Press R to Restart";
                }
            }
        }

    }
     void Update() // restart input
        {
            //Press R to restart
            if (Input.GetKeyDown(KeyCode.R))
            {
                Time.timeScale = 1; //Resume normal time
                SceneManager.LoadScene(SceneManager.GetActiveScene().name);
            }
        }
     void FreezeGame()
    {
        //Finds ball in the scene 
        GameObject[] balls = GameObject.FindGameObjectsWithTag("Ball");
        
        //Stops ball's movement
        foreach (GameObject ball in balls)
        {
            Rigidbody2D rb = ball.GetComponent<Rigidbody2D>();
            if (rb != null)
            {
                rb.linearVelocity = Vector2.zero; //Stops linear movement
                rb.angularVelocity = 0; //Stops rotation
            }
        }
    }
}
