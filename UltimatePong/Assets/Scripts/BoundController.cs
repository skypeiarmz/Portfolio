using UnityEngine;
public class BoundController : MonoBehaviour
{
    public bool isLeftBound; //Checks for left bound, unchecks right
    void OnTriggerEnter2D(Collider2D other)
    {
        //Checks if the object that hit the boundary is a chaos orb
        if (other.gameObject.tag == "Ball")
        {
            //Find game manager to update scores 
            GameManager gameManager = FindFirstObjectByType<GameManager>();

            if (isLeftBound)
            {
                //Left bound = player scored
                if (gameManager != null) gameManager.PlayerScored();
            }
            else
            {
                //Right bound = enemy scored
                if (gameManager != null) gameManager.EnemyScored();
            }

            Destroy(other.gameObject); //Remove orb from dimension
        }
    }
}
