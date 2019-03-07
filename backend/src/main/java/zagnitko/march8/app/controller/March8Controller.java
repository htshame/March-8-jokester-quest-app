package zagnitko.march8.app.controller;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import zagnitko.march8.app.dto.CheckpointDTO;

@RestController
@RequestMapping("/march8/checkpoints")
public class March8Controller {

    private static final Logger LOG = LoggerFactory.getLogger(March8Controller.class);

    private static final String FIRST_CODE = "солнышко";
    private static final String SECOND_CODE = "кофе";
    private static final String THIRD_CODE = "цветочек";
    private static final String FOURTH_CODE = "червячок";
    private static final String FIFTH_CODE = "синхрофазотрон";
    private static final String SIXTH_CODE = "wiley1";
    private static final String GUESS_AGAIN = "guess again";

    @Value("${is.live.mode}")
    private Boolean isLiveMode;

    /**
     * The beginning.
     * @param request - HTTP request.
     * @return next checkpoint data.
     */
    @GetMapping(value = "/start", produces = {"application/json"})
    public ResponseEntity<CheckpointDTO> startCheckpoint(HttpServletRequest request) {
        CheckpointDTO checkpointDTO = new CheckpointDTO();
        getClientData(checkpointDTO, request, 0);
        String nextCheckpointMessage = "Первый пароль наклеен на один из мониторов в нашем офисе. "
                + "Не стесняйтесь требовать конфетку у владельца монитора и не забывайте про артефакты.";
        if (!isLiveMode) {
            nextCheckpointMessage += " (например, пароль \"солнышко\", его уже можно ввести. "
                    + "конфетки вручим владельцу монитора для раздачи. "
                    + "и можно будет дать ему же \"артефакты\" для квеста, типа насоса или еще что-нить).";
        }
        checkpointDTO.setNextCheckpoint(nextCheckpointMessage);
        checkpointDTO.setNextId(1L);
        return ResponseEntity.ok(checkpointDTO);
    }

    /**
     * Level 1.
     * @param request - HTTP request.
     * @return next checkpoint data.
     */
    @PostMapping(value = "/1", produces = {"application/json"})
    public ResponseEntity<CheckpointDTO> firstCheckpoint(@RequestBody CheckpointDTO checkpointDTO,
                                                  HttpServletRequest request) {
        getClientData(checkpointDTO, request, 1);
        if (FIRST_CODE.equalsIgnoreCase(checkpointDTO.getCheckpointCode())) {
            String nextCheckpointMessage = "Как вы все знаете, самым высоким деревом в мире является Гиперион — "
                    + "экземпляр секвойи вечнозелёной. "
                    + "Его высота 115.61 метра. "
                    + "Пароль для следующего уровня находится на самом высоком дереве нашего офиса. "
                    + "Мы бы не рекомендовали требовать конфетку у дерева. Артефактов у дерева тоже нет.";
            if (!isLiveMode) {
                nextCheckpointMessage += " (например, пароль будет \"кофе\").";
            }
            checkpointDTO.setNextCheckpoint(nextCheckpointMessage);
            checkpointDTO.setNextId(2L);
            return ResponseEntity.ok(checkpointDTO);
        }
        checkpointDTO.setNextCheckpoint(GUESS_AGAIN);
        return new ResponseEntity<>(checkpointDTO, HttpStatus.FORBIDDEN);
    }

    /**
     * Level 2.
     * @param request - HTTP request.
     * @return next checkpoint data.
     */
    @PostMapping(value = "/2", produces = {"application/json"})
    public ResponseEntity<CheckpointDTO> secondCheckpoint(@RequestBody CheckpointDTO checkpointDTO,
                                                   HttpServletRequest request) {
        getClientData(checkpointDTO, request, 2);
        if (SECOND_CODE.equalsIgnoreCase(checkpointDTO.getCheckpointCode())) {
            String nextCheckpointMessage = "Пароль для третьего чекпоинта находится в прошлом. Во времени, "
                   + "по которому живет главная астрономическая организация Соединенного Королевства.";
            if (!isLiveMode) {
                nextCheckpointMessage += " (намек на часы с надписью London. пароль будет \"цветочек\")";
            }
            checkpointDTO.setNextCheckpoint(nextCheckpointMessage);
            checkpointDTO.setNextId(3L);
            return ResponseEntity.ok(checkpointDTO);
        }
        checkpointDTO.setNextCheckpoint(GUESS_AGAIN);
        return new ResponseEntity<>(checkpointDTO, HttpStatus.FORBIDDEN);
    }

    /**
     * Level 3.
     * @param request - HTTP request.
     * @return next checkpoint data.
     */
    @PostMapping(value = "/3", produces = {"application/json"})
    public ResponseEntity<CheckpointDTO> thirdCheckpoint(@RequestBody CheckpointDTO checkpointDTO,
                                                  HttpServletRequest request) {
        getClientData(checkpointDTO, request, 3);
        if (THIRD_CODE.equalsIgnoreCase(checkpointDTO.getCheckpointCode())) {
            String nextCheckpointMessage = "Где часто зависает Лёша?";
            if (!isLiveMode) {
                nextCheckpointMessage += " (намек на турник. пароль будет \"червячок\")";
            }
            checkpointDTO.setNextCheckpoint(nextCheckpointMessage);
            checkpointDTO.setNextId(4L);
            return ResponseEntity.ok(checkpointDTO);
        }
        checkpointDTO.setNextCheckpoint(GUESS_AGAIN);
        return new ResponseEntity<>(checkpointDTO, HttpStatus.FORBIDDEN);
    }

    /**
     * Level 4.
     * @param request - HTTP request.
     * @return next checkpoint data.
     */
    @PostMapping(value = "/4", produces = {"application/json"})
    public ResponseEntity<CheckpointDTO> fourthCheckpoint(@RequestBody CheckpointDTO checkpointDTO,
                                                   HttpServletRequest request) {
        getClientData(checkpointDTO, request, 4);
        if (FOURTH_CODE.equalsIgnoreCase(checkpointDTO.getCheckpointCode())) {
            String nextCheckpointMessage = "В 1983-м на российской станции «Восток» зафиксировали самую низкую "
                   + "температуру на планете за всю историю метеонаблюдений: -89° C. "
                   + "А где у нас в офисе бывает почти так же холодно (не советуем искать в холодильнике)?";
            if (!isLiveMode) {
                nextCheckpointMessage += " (намек на серверную, туда можно положить мячики). "
                        + "пароль будет \"синхрофазотрон\")";
            }
            checkpointDTO.setNextCheckpoint(nextCheckpointMessage);
            checkpointDTO.setNextId(5L);
            return ResponseEntity.ok(checkpointDTO);
        }
        checkpointDTO.setNextCheckpoint(GUESS_AGAIN);
        return new ResponseEntity<>(checkpointDTO, HttpStatus.FORBIDDEN);
    }

    /**
     * Level 5.
     * @param request - HTTP request.
     * @return next checkpoint data.
     */
    @PostMapping(value = "/5", produces = {"application/json"})
    public ResponseEntity<CheckpointDTO> fifthCheckpoint(@RequestBody CheckpointDTO checkpointDTO,
                                                  HttpServletRequest request) {
        getClientData(checkpointDTO, request, 5);
        if (FIFTH_CODE.equalsIgnoreCase(checkpointDTO.getCheckpointCode())) {
            String nextCheckpointMessage = "Там купались свинки...";
            if (!isLiveMode) {
                nextCheckpointMessage += " (намек на кувшин в котором Аня топит свою свинью с травой на спине."
                       + " В кувшин можно будет положить шланги для насосов. пароль будет \"wiley1\"";
            }
            checkpointDTO.setNextCheckpoint(nextCheckpointMessage);
            checkpointDTO.setNextId(6L);
            return ResponseEntity.ok(checkpointDTO);
        }
        checkpointDTO.setNextCheckpoint(GUESS_AGAIN);
        return new ResponseEntity<>(checkpointDTO, HttpStatus.FORBIDDEN);
    }

    /**
     * Level 6.
     * @param request - HTTP request.
     * @return next checkpoint data.
     */
    @PostMapping(value = "/6", produces = {"application/json"})
    public ResponseEntity<CheckpointDTO> sixthCheckpoint(@RequestBody CheckpointDTO checkpointDTO,
                                                  HttpServletRequest request) {
        getClientData(checkpointDTO, request, 6);
        if (SIXTH_CODE.equalsIgnoreCase(checkpointDTO.getCheckpointCode())) {
            String nextCheckpointMessage = "Ура! Вы справились с квестом! Просим вас собраться в переговорке.";
            if (!isLiveMode) {
                nextCheckpointMessage += " (все собираются в переговорке и надувают мячики).";
            }
            checkpointDTO.setNextCheckpoint(nextCheckpointMessage);
            checkpointDTO.setIsLast(true);
            return ResponseEntity.ok(checkpointDTO);
        }
        checkpointDTO.setNextCheckpoint(GUESS_AGAIN);
        return new ResponseEntity<>(checkpointDTO, HttpStatus.FORBIDDEN);
    }

    /**
     * Logger.
     * @param checkpointDTO - checkpoint data.
     * @param request - HTTP request.
     * @param level - level number.
     */
    private void getClientData(CheckpointDTO checkpointDTO, HttpServletRequest request, int level) {
        if (checkpointDTO != null && request != null) {
            LOG.info("Password tried: {}. Quest level: {}. Ip: {}. User-agent: {}.", checkpointDTO.getCheckpointCode(),
                    level, request.getRemoteAddr(), request.getHeader("user-agent"));
        } else {
            LOG.error("Houston, we have a problem. Checkpoint data or request is null");
        }
    }
}
