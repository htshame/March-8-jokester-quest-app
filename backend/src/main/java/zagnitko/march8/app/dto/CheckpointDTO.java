package zagnitko.march8.app.dto;

import com.fasterxml.jackson.annotation.JsonInclude;

/**
 * @author <a href='mailto:azagnityko@wiley.com'>azagnityko</a>
 * @version 25.02.2019
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
public class CheckpointDTO {

    private Long nextId;

    private String checkpointCode;

    private String nextCheckpoint;

    private Boolean isLast;

    public String getCheckpointCode() {
        return checkpointCode;
    }

    public void setCheckpointCode(String checkpointCode) {
        this.checkpointCode = checkpointCode;
    }

    public String getNextCheckpoint() {
        return nextCheckpoint;
    }

    public void setNextCheckpoint(String nextCheckpoint) {
        this.nextCheckpoint = nextCheckpoint;
    }

    public Long getNextId() {
        return nextId;
    }

    public void setNextId(Long nextId) {
        this.nextId = nextId;
    }

    public Boolean getIsLast() {
        return isLast;
    }

    public void setIsLast(Boolean isLast) {
        this.isLast = isLast;
    }
}
